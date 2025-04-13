from fastapi import FastAPI, Request, HTTPException
from enum import Enum
import requests
from bs4 import BeautifulSoup, Tag
from datetime import datetime, timedelta

api: FastAPI = FastAPI()

BASE_URL = 'https://nutrition.sa.ucsc.edu/'
MEAL_URL = '&mealName='

LONGMENU_URL = 'longmenu.aspx?naFlag=1&locationNum=' 
SHORTMENU_URL = 'shortmenu.aspx?naFlag=1&locationNum='

EMOJIS = { 'veggie': '🥦', 'vegan': '🌱', 'halal': '🍖', 'eggs': '🥚', 'beef': '🐮', 'milk': '🥛', 'fish': '🐟', 'alcohol': '🍷', 'gluten': '🍞', 'soy': '🫘', 'treenut': '🥥', 'sesame': '𓇢', 'pork': '🐷', 'shellfish': '🦐', 'nuts': '🥜' }

class Location(Enum):
    CowellStevenson = '05'
    CrownMerrill = '20'
    NineTen = '40'
    PorterKresge = '25'
    RachelCarsonOakes = '30'

LOCATION_MAP = {
    'Cowell/Stevenson': Location.CowellStevenson,
    'Crown/Merrill': Location.CrownMerrill,
    'Nine/Ten': Location.NineTen,
    'Porter/Kresge': Location.PorterKresge,
    'Carson/Oakes': Location.RachelCarsonOakes
}

class LocationRequest(Enum):
    CowellStevenson = 'Cowell/Stevenson'
    CrownMerrill = 'Crown/Merrill'
    NineTen = 'Nine/Ten'
    PorterKresge = 'Porter/Kresge'
    RachelCarsonOakes = 'Carson/Oakes'

# def store_menu_cache

def fetch_website_html(url: str, locationNum: str, meal: str = '', day_offset = 0) -> str:
    full_url = url + locationNum + ((MEAL_URL + meal) if meal != '' else '')
    if day_offset != 0:
        date = datetime.now() + timedelta(days=day_offset)
        date_str = date.strftime('%m/%d/%Y')

        date_str = date_str.replace('/', '%2F')
        full_url += f'&dtdate={date_str}'
        
        # url += f'&dtdate={date_str}'

    print(full_url)
    cookies = {
        'WebInaCartLocation': locationNum,
        'WebInaCartDates': '',
        'WebInaCartMeals': '',
        'WebInaCartQtys': '',
        'WebInaCartRecipes': ''
    }

    response = requests.get(full_url, cookies=cookies)
    return response.text

def get_short_menu(locationNum: str, day_offset: int = 0) -> str:
    url = BASE_URL + SHORTMENU_URL
    html = fetch_website_html(url, locationNum, '', day_offset)
    soup = BeautifulSoup(html, 'lxml')

    menu = {}

    meals = soup.select('body > table > table:nth-of-type(1) > tr > td > table')

    for meal in meals:
        food_items = {}
        meal_name = meal.find('div', {'class': 'shortmenumeals'})

        if meal_name is None:
            continue
        meal_name = meal_name.text.strip()

        current_group = ''

        for food in meal.select('td > table > tr:nth-child(2) > td > table:nth-child(1)')[0].children:
            if not isinstance(food, Tag):
                continue
            divider = food.find('div', class_='shortmenucats')
            if divider is not None:
                current_group = divider.text.replace('--', '').strip()
                food_items[current_group] = {}
                continue

            food_name = food.find('div', class_='shortmenurecipes')
            food_name = food_name.text.strip()

            restrictions = []
            for restriction in food.select('img'):
                restriction_name = restriction['src'].split('/')[-1].split('.')[0]
                restrictions.append(EMOJIS[restriction_name] if restriction_name in EMOJIS else restriction_name)

            food_items[current_group][food_name] = {
                'name': food_name,
                'restrictions': restrictions,
            }

        menu[meal_name] = food_items
    return menu

if __name__ == '__main__':
    location = Location.CowellStevenson
    print(get_short_menu(location.value, 0))
    print()
    print()
    print(get_short_menu(location.value, 1))