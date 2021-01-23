from fastapi import APIRouter
from uuid import UUID

router = APIRouter()

@router.post('/user_id/photos')
def upload_photos() -> Dict[str, UUID]:
    """
    au début simple puis celery
    """
    pass

@router.get('/uploads/status/uuid')
def upload_status() -> str:
    """
    Mettre une enum
    """
    return "I DON'T KNOW"

