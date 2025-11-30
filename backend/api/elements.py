"""
元素相关API
"""
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from backend.database import get_db
from backend import crud, schemas

router = APIRouter(prefix="/api/elements", tags=["elements"])


@router.get("/", response_model=List[schemas.ElementResponse])
def get_all_elements(db: Session = Depends(get_db)):
    """
    获取所有118个元素
    """
    elements = crud.get_all_elements(db)
    return elements


@router.get("/{symbol}", response_model=schemas.ElementResponse)
def get_element_by_symbol(symbol: str, db: Session = Depends(get_db)):
    """
    根据元素符号获取元素信息

    Args:
        symbol: 元素符号，如 "Cu"
    """
    element = crud.get_element_by_symbol(db, symbol)
    if not element:
        raise HTTPException(status_code=404, detail=f"元素 {symbol} 不存在")
    return element
