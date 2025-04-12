# src/backend/news.py
import feedparser
from fastapi import APIRouter

router = APIRouter()

@router.get("/rss")
async def get_rss():
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
