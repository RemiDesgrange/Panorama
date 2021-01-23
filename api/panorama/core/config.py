from typing import Optional
from pydantic import BaseSettings, PostgresDsn


class Settings(BaseSettings):
    POSTGRES_SERVER: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    SQLALCHEMY_DATABASE_URI: Optional[PostgresDsn] = None
    class Config:
        case_sensitive = True


settings = Settings()
