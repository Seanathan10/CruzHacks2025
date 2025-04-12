from fastapi import FastAPI, Request, HTTPException
import urllib.parse
# from fastapi.middleware.cors import CORSMiddleware

api: FastAPI = FastAPI()
# api.add_middleware(
#     CORSMiddleware, 
#     allow_origins=["*"], 
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

@api.get("/test")
async def getPath():
    return {"hello": "world"}