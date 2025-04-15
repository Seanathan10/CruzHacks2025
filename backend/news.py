# src/backend/news.py
import feedparser
from fastapi import APIRouter

from fastapi import FastAPI, Request, HTTPException
import urllib.parse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import news, AI
from typing import Optional
# from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime


router = APIRouter()

@router.get("/rss_press_releases")
async def get_rss_press_releases():
    feed_url = "http://news.ucsc.edu/rss/press_releases_page.xml"
    try:
        feed = feedparser.parse(feed_url)
        return {
            "feed": [
                {
                    "title": entry.title,
                    "link": entry.link,
                    "published": entry.published,
                    "summary": entry.summary,
                }
                for entry in feed.entries
            ]
        }
    except Exception as e:
        return {"error": str(e)}


"""
Engineering
Name 	RSS URL
Engineering 	http://news.ucsc.edu/rss/engineering.xml
Applied Mathematics and Statistics 	http://news.ucsc.edu/rss/applied_math_stats.xml
Biomolecular Engineering 	http://news.ucsc.edu/rss/biomolecular_engineering.xml
Computer Engineering 	http://news.ucsc.edu/rss/computer_engineering.xml
Computer Science 	http://news.ucsc.edu/rss/computer_science.xml
Electrical Engineering 	http://news.ucsc.edu/rss/electrical_engineering.xml
Technology and Information Management 	http://news.ucsc.edu/rss/tech_inform_mngmt.xml
"""

@router.get("/rss_engineering")
async def get_rss_engineering():
    feed_url = "http://news.ucsc.edu/rss/engineering.xml"
    try:
        feed = feedparser.parse(feed_url)
        return {
            "feed": [
                {
                    "title": entry.title,
                    "link": entry.link,
                    "published": entry.published,
                    "summary": entry.summary,
                }
                for entry in feed.entries
            ]
        }
    except Exception as e:
        return {"error": str(e)}
    

@router.get("/rss_applied_math_stats")
async def get_rss_applied_math_stats():
    feed_url = "http://news.ucsc.edu/rss/applied_math_stats.xml"
    try:
        feed = feedparser.parse(feed_url)
        return {
            "feed": [
                {
                    "title": entry.title,
                    "link": entry.link,
                    "published": entry.published,
                    "summary": entry.summary,
                }
                for entry in feed.entries
            ]
        }
    except Exception as e:
        return {"error": str(e)}
    
@router.get("/rss_biomolecular_engineering")
async def get_rss_biomolecular_engineering():
    feed_url = "http://news.ucsc.edu/rss/biomolecular_engineering.xml"
    try:
        feed = feedparser.parse(feed_url)
        return {
            "feed": [
                {
                    "title": entry.title,
                    "link": entry.link,
                    "published": entry.published,
                    "summary": entry.summary,
                }
                for entry in feed.entries
            ]
        }
    except Exception as e:
        return {"error": str(e)}
    
@router.get("/rss_computer_engineering")
async def get_rss_computer_engineering():
    feed_url = "http://news.ucsc.edu/rss/computer_engineering.xml"
    try:
        feed = feedparser.parse(feed_url)
        return {
            "feed": [
                {
                    "title": entry.title,
                    "link": entry.link,
                    "published": entry.published,
                    "summary": entry.summary,
                }
                for entry in feed.entries
            ]
        }
    except Exception as e:
        return {"error": str(e)}
    
@router.get("/rss_computer_science")
async def get_rss_computer_science():
    feed_url = "http://news.ucsc.edu/rss/computer_science.xml"
    try:
        feed = feedparser.parse(feed_url)
        return {
            "feed": [
                {
                    "title": entry.title,
                    "link": entry.link,
                    "published": entry.published,
                    "summary": entry.summary,
                }
                for entry in feed.entries
            ]
        }
    except Exception as e:
        return {"error": str(e)}
    
@router.get("/rss_electrical_engineering")
async def get_rss_electrical_engineering():
    feed_url = "http://news.ucsc.edu/rss/electrical_engineering.xml"
    try:
        feed = feedparser.parse(feed_url)
        return {
            "feed": [
                {
                    "title": entry.title,
                    "link": entry.link,
                    "published": entry.published,
                    "summary": entry.summary,
                }
                for entry in feed.entries
            ]
        }
    except Exception as e:
        return {"error": str(e)}

@router.get("/rss_technology_and_information_management")
async def get_rss_technology_and_information_management():
    feed_url = "http://news.ucsc.edu/rss/tech_inform_mngmt.xml"
    try:
        feed = feedparser.parse(feed_url)
        return {
            "feed": [
                {
                    "title": entry.title,
                    "link": entry.link,
                    "published": entry.published,
                    "summary": entry.summary,
                }
                for entry in feed.entries
            ]
        }
    except Exception as e:
        return {"error": str(e)}
    
