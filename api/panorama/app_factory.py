from fastapi import FastAPI
import sentry_sdk
from sentry_sdk.integrations.asgi import SentryAsgiMiddleware
from starlette.middleware.cors import CORSMiddleware
from panorama.views.api import api_router


def create_app(app_name: str) -> FastAPI:
    return FastAPI(title=app_name)


def init_sentry(app: FastAPI):
        # sentry is service that collect all exception in the app ans send it to sentry.io, or your own instance
    # the endpoint to contact sentry is set via SENTRY_DSN env var
    sentry_sdk.init()
    app.add_middleware(SentryAsgiMiddleware)

def load_settings():
    pass

def setup_cors(app: FastAPI):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

def load_routes(app: FastAPI):
    app.include_router(api_router, prefix="/v1")

def init_app(app_name: str) -> FastAPI:
    load_settings()
    app = create_app(app_name)
    init_sentry(app)
    load_routes(app)
    return app



