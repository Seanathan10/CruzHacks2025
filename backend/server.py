# backend/server.py
from fastapi import FastAPI
from backend import news

app = FastAPI()

@app.get("/test")
async def hello():
    return {"hello": "world"}

app.include_router(news.router)
