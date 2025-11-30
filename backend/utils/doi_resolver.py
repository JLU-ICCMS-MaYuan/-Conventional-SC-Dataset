"""
DOI解析工具
通过CrossRef API获取文献元数据
"""
import httpx
import json
from typing import Optional, Dict, Any


class DOIResolver:
    """DOI解析器"""

    def __init__(self):
        self.crossref_api_url = "https://api.crossref.org/works/"
        self.doi_org_url = "https://doi.org/"
        self.timeout = 30.0

    async def resolve_doi(self, doi: str) -> Optional[Dict[str, Any]]:
        """
        解析DOI并获取文献元数据

        Args:
            doi: DOI标识符，如 "10.1038/nature12345"

        Returns:
            包含文献元数据的字典，如果解析失败返回None
        """
        try:
            # 清理DOI（移除可能的URL前缀）
            clean_doi = doi.replace("https://doi.org/", "").replace("http://doi.org/", "").strip()

            # 调用CrossRef API
            async with httpx.AsyncClient(timeout=self.timeout) as client:
                response = await client.get(f"{self.crossref_api_url}{clean_doi}")

                if response.status_code != 200:
                    return None

                data = response.json()

                if "message" not in data:
                    return None

                # 提取元数据
                message = data["message"]
                metadata = self._extract_metadata(message)
                return metadata

        except Exception as e:
            print(f"DOI解析错误: {e}")
            return None

    def _extract_metadata(self, message: Dict[str, Any]) -> Dict[str, Any]:
        """
        从CrossRef响应中提取元数据

        Args:
            message: CrossRef API返回的message字段

        Returns:
            提取的元数据字典
        """
        # 提取标题
        title = ""
        if "title" in message and len(message["title"]) > 0:
            title = message["title"][0]

        # 提取作者
        authors = []
        if "author" in message:
            for author in message["author"]:
                given = author.get("given", "")
                family = author.get("family", "")
                if given and family:
                    authors.append(f"{given} {family}")
                elif family:
                    authors.append(family)

        # 提取期刊
        journal = ""
        if "container-title" in message and len(message["container-title"]) > 0:
            journal = message["container-title"][0]

        # 提取卷号
        volume = message.get("volume", "")

        # 提取页码
        pages = message.get("page", "")

        # 提取年份
        year = None
        if "published-print" in message:
            date_parts = message["published-print"].get("date-parts", [[]])[0]
            if len(date_parts) > 0:
                year = date_parts[0]
        elif "published-online" in message:
            date_parts = message["published-online"].get("date-parts", [[]])[0]
            if len(date_parts) > 0:
                year = date_parts[0]

        # 提取摘要（如果有）
        abstract = message.get("abstract", "")

        # 提取DOI
        doi = message.get("DOI", "")

        return {
            "title": title,
            "authors": authors,
            "journal": journal,
            "volume": volume,
            "pages": pages,
            "year": year,
            "abstract": abstract,
            "doi": doi
        }

    async def validate_doi(self, doi: str) -> bool:
        """
        验证DOI是否有效（是否存在）

        Args:
            doi: DOI标识符

        Returns:
            True表示DOI有效，False表示无效
        """
        metadata = await self.resolve_doi(doi)
        return metadata is not None


# 创建全局实例
doi_resolver = DOIResolver()


# 便捷函数
async def get_doi_metadata(doi: str) -> Optional[Dict[str, Any]]:
    """
    获取DOI元数据的便捷函数

    Args:
        doi: DOI标识符

    Returns:
        元数据字典或None
    """
    return await doi_resolver.resolve_doi(doi)


async def validate_doi(doi: str) -> bool:
    """
    验证DOI的便捷函数

    Args:
        doi: DOI标识符

    Returns:
        True表示有效，False表示无效
    """
    return await doi_resolver.validate_doi(doi)
