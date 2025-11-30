"""
图片处理工具
用于生成缩略图和压缩图片
"""
from PIL import Image
from io import BytesIO
from typing import Tuple


class ImageProcessor:
    """图片处理器"""

    def __init__(
        self,
        thumbnail_size: Tuple[int, int] = (200, 200),
        max_image_size: Tuple[int, int] = (1920, 1920),
        jpeg_quality: int = 85
    ):
        """
        初始化图片处理器

        Args:
            thumbnail_size: 缩略图尺寸（宽, 高），默认200x200
            max_image_size: 原图最大尺寸（宽, 高），默认1920x1920
            jpeg_quality: JPEG压缩质量（1-100），默认85
        """
        self.thumbnail_size = thumbnail_size
        self.max_image_size = max_image_size
        self.jpeg_quality = jpeg_quality

    def process_image(self, image_data: bytes) -> Tuple[bytes, bytes]:
        """
        处理图片：生成压缩后的原图和缩略图

        Args:
            image_data: 原始图片的字节数据

        Returns:
            (压缩后的原图字节, 缩略图字节)

        Raises:
            ValueError: 如果图片无法打开或处理
        """
        try:
            # 打开图片
            image = Image.open(BytesIO(image_data))

            # 转换为RGB模式（如果是RGBA或其他模式）
            if image.mode not in ('RGB', 'L'):
                image = image.convert('RGB')

            # 生成压缩后的原图
            compressed_image = self._compress_image(image)

            # 生成缩略图
            thumbnail = self._generate_thumbnail(image)

            return compressed_image, thumbnail

        except Exception as e:
            raise ValueError(f"图片处理失败: {str(e)}")

    def _compress_image(self, image: Image.Image) -> bytes:
        """
        压缩图片

        Args:
            image: PIL Image对象

        Returns:
            压缩后的图片字节数据
        """
        # 如果图片过大，缩小到最大尺寸
        if image.width > self.max_image_size[0] or image.height > self.max_image_size[1]:
            image.thumbnail(self.max_image_size, Image.Resampling.LANCZOS)

        # 保存为JPEG格式
        output = BytesIO()
        image.save(output, format='JPEG', quality=self.jpeg_quality, optimize=True)
        return output.getvalue()

    def _generate_thumbnail(self, image: Image.Image) -> bytes:
        """
        生成缩略图

        Args:
            image: PIL Image对象

        Returns:
            缩略图字节数据
        """
        # 创建图片副本
        thumb = image.copy()

        # 使用thumbnail方法保持宽高比
        thumb.thumbnail(self.thumbnail_size, Image.Resampling.LANCZOS)

        # 保存为JPEG格式
        output = BytesIO()
        thumb.save(output, format='JPEG', quality=75, optimize=True)
        return output.getvalue()

    def validate_image(self, image_data: bytes) -> bool:
        """
        验证图片是否有效

        Args:
            image_data: 图片字节数据

        Returns:
            True表示有效，False表示无效
        """
        try:
            image = Image.open(BytesIO(image_data))
            # 尝试验证图片
            image.verify()
            return True
        except Exception:
            return False

    def get_image_info(self, image_data: bytes) -> dict:
        """
        获取图片信息

        Args:
            image_data: 图片字节数据

        Returns:
            包含图片信息的字典：width, height, format, mode, size
        """
        try:
            image = Image.open(BytesIO(image_data))
            return {
                "width": image.width,
                "height": image.height,
                "format": image.format,
                "mode": image.mode,
                "size": len(image_data)
            }
        except Exception as e:
            raise ValueError(f"无法获取图片信息: {str(e)}")


# 创建全局实例
image_processor = ImageProcessor()


# 便捷函数
def process_image(image_data: bytes) -> Tuple[bytes, bytes]:
    """
    处理图片的便捷函数

    Args:
        image_data: 原始图片字节数据

    Returns:
        (压缩后的原图, 缩略图)
    """
    return image_processor.process_image(image_data)


def validate_image(image_data: bytes) -> bool:
    """
    验证图片的便捷函数

    Args:
        image_data: 图片字节数据

    Returns:
        True表示有效，False表示无效
    """
    return image_processor.validate_image(image_data)


def get_image_info(image_data: bytes) -> dict:
    """
    获取图片信息的便捷函数

    Args:
        image_data: 图片字节数据

    Returns:
        图片信息字典
    """
    return image_processor.get_image_info(image_data)
