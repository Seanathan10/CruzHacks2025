from fastapi import FastAPI, Request, HTTPException
from . import scraper
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

@api.get("/courses")
async def getAllCourses(
    term: str, 
    department: str = "", 
    catalogOp: str = "contains", 
    catalogNum: str = "", 
    regStatus: str = "O",
    titleKeyword: str = "",
    instructorNameOp: str = "=",
    instructorName: str = "",
    ge: str = "",
    crseUnitsOp: str = "=",
    crseUnitsFrom: str = "",
    crseUnitsTo: str = "",
    crseUnitsExact: str = ""
):
    return scraper.queryPisa(term, department, catalogOp, catalogNum, regStatus, titleKeyword, instructorNameOp, instructorName, ge, crseUnitsOp, crseUnitsFrom, crseUnitsTo, crseUnitsExact)

@api.get("/test")
async def getPath():
    return {"hello": "world"}