# src/backend/gemini.py
from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
import google.generativeai as genai
import os
from typing import Optional

router = APIRouter()

# genai.configure(api_key="AIzaSyC2Pc8QcmWyOPc9pi10WpejbfL3TR7HkHA")
genai.configure(api_key="AIzaSyA_NivZi3nSI6bABu5WMOHKhNxQbY5BbbA")

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



class DiningSummaryRequest(BaseModel):
    location: str
    menu_prompt: str
    temperature: Optional[float] = 0.7
    max_tokens: Optional[int] = 300

@router.post("/generate_dh_summaries")
async def generate_dh_summaries(request: DiningSummaryRequest):
    try:
        model = genai.GenerativeModel("gemini-2.0-flash")
        generation_config = genai.types.GenerationConfig(
            temperature=request.temperature,
            max_output_tokens=request.max_tokens,
        )

        response = model.generate_content(
            request.menu_prompt,
            generation_config=generation_config,
        )

        return {"text": response.text}
    except Exception as e:
        return {"text": f"Gemini generation failed: {str(e)}"}
        # raise HTTPException(status_code=500, detail=f"Gemini generation failed: {str(e)}")
