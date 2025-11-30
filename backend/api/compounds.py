"""
元素组合相关API
"""
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from backend.database import get_db
from backend import crud, schemas

router = APIRouter(prefix="/api/compounds", tags=["compounds"])


@router.post("/check")
def check_compound_exists(
    compound_data: schemas.CompoundCreate,
    db: Session = Depends(get_db)
):
    """
    检查元素组合是否存在且有文献

    Args:
        compound_data: 包含元素符号列表的数据

    Returns:
        {
            "exists": bool,  # 元素组合是否存在
            "has_papers": bool,  # 是否有文献
            "element_symbols": str,  # 元素组合字符串
            "message": str  # 提示信息
        }
    """
    element_symbols = compound_data.element_symbols

    # 验证元素是否都存在
    elements = crud.get_elements_by_symbols(db, element_symbols)
    if len(elements) != len(element_symbols):
        invalid_symbols = set(element_symbols) - {e.symbol for e in elements}
        raise HTTPException(
            status_code=400,
            detail=f"以下元素不存在: {', '.join(invalid_symbols)}"
        )

    # 检查元素组合是否有文献
    has_papers = crud.check_compound_has_papers(db, element_symbols)

    # 生成元素组合字符串
    sorted_symbols = sorted(set(element_symbols))
    compound_key = "-".join(sorted_symbols)

    if has_papers:
        message = f"找到 {compound_key} 系统的文献"
        return {
            "exists": True,
            "has_papers": True,
            "element_symbols": compound_key,
            "message": message
        }
    else:
        message = "该元素组合暂未收录对应化合物，请重新选择"
        return {
            "exists": False,
            "has_papers": False,
            "element_symbols": compound_key,
            "message": message
        }


@router.get("/{element_symbols}")
def get_compound_info(
    element_symbols: str,
    db: Session = Depends(get_db)
):
    """
    获取元素组合信息

    Args:
        element_symbols: 元素符号组合，如 "Ba-Cu-O-Y"

    Returns:
        元素组合信息和文献数量
    """
    # 解析元素符号
    symbols = element_symbols.split("-")

    # 如果元素组合不存在，自动创建（允许用户成为第一个贡献者）
    compound = crud.get_compound_by_symbols(db, symbols)
    if not compound:
        # 验证元素是否都存在
        elements = crud.get_elements_by_symbols(db, symbols)
        if len(elements) != len(symbols):
            invalid_symbols = set(symbols) - {e.symbol for e in elements}
            raise HTTPException(
                status_code=400,
                detail=f"以下元素不存在: {', '.join(invalid_symbols)}"
            )
        # 创建新的元素组合
        compound = crud.get_or_create_compound(db, symbols)

    # 获取文献数量
    paper_count = crud.get_compound_papers_count(db, compound.id)

    return {
        "id": compound.id,
        "element_symbols": compound.element_symbols,
        "created_at": compound.created_at,
        "paper_count": paper_count
    }
