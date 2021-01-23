from fastapi import APIRouter

router = APIRouter()

@router.get('/photos')
def photos():
    return {}



