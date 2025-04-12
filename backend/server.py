from fastapi import FastAPI, Request, HTTPException
from . import scraper
import urllib.parse
from fastapi.middleware.cors import CORSMiddleware

api: FastAPI = FastAPI()
api.add_middleware(
    CORSMiddleware, 
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@api.get("/courses")
async def getAllCourses(
    term: str, 
    regStatus: str = "O",
    department: str = "", 
    catalogOp: str = "contains", 
    catalogNum: str = "", 
    titleKeyword: str = "",
    instructorNameOp: str = "=",
    instructorName: str = "",
    ge: str = "",
    crseUnitsOp: str = "=",
    crseUnitsFrom: str = "",
    crseUnitsTo: str = "",
    crseUnitsExact: str = "",
    meetingDays: str = "",
    meetingTimes: str = "",
    acadCareer: str = "",
    asynch: str = "A",
    hybrid: str = "H",
    synch: str = "S",
    person: str = "P"
):
    return scraper.queryPisa(term, regStatus, department, catalogOp, catalogNum, titleKeyword, instructorNameOp, instructorName, ge, crseUnitsOp, crseUnitsFrom, crseUnitsTo, crseUnitsExact, meetingDays, meetingTimes, acadCareer, asynch, hybrid, synch, person)

@api.get("/test")
async def getPath():
    return {"hello": "world"}