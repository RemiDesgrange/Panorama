from fastapi import APIRouter
from panorama.views.endpoints import test

api_router = APIRouter()
api_router.include_router(test.router, tags=['router'])
