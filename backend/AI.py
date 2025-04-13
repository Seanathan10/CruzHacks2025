# src/backend/gemini.py
from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
import google.generativeai as genai
import os

router = APIRouter()

genai.configure(api_key="AIzaSyC2Pc8QcmWyOPc9pi10WpejbfL3TR7HkHA")

class PromptRequest(BaseModel):
    prompt: str

@router.post("/generate_content")
async def generate_content(request: PromptRequest):
    try:
        model = genai.GenerativeModel("gemini-2.0-flash")
        response = model.generate_content(request.prompt)
        return {"text": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
