
import { JSDOM } from 'jsdom';


const BASE_URL = 'https://nutrition.sa.ucsc.edu/'

const LONGMENU_URL = 'longmenu.aspx?naFlag=1&locationNum=' 
const SHORTMENU_URL = 'shortmenu.aspx?naFlag=1&locationNum='

const LOCATION_NUMS: Record<string, string> = {
    'Cowell/Stevenson': "05",
    'Crown/Merrill': "20",
    'Nine/Ten': "40",
    'Porter/Kresge': "25",
    'Rachel Carson/Oakes': "30",
}

export enum Location {
    CowellStevenson = '05',
    CrownMerrill = '20',
    NineTen = '40',
    PorterKresge = '25',
    RachelCarsonOakes = '30',
}

export enum Meal {
    Breakfast = 'Breakfast',
    Lunch = 'Lunch',
    Dinner = 'Dinner',
    LateNight = 'Late Night',
}

interface FoodItem {
    name: string
    portion?: string
    price?: string
    nutritionUrl?: string
}

interface FoodGroup {
    [key: string]: FoodItem
}

const MEAL_URL = '&mealName='

const EMOJIS = { 'veggie': '🥦', 'vegan': '🌱', 'halal': '🍖', 'eggs': '🥚', 'beef': '🐮', 'milk': '🥛', 'fish': '🐟', 'alcohol': '🍷', 'gluten': '🍞', 'soy': '🫘', 'treenut': '🥥', 'sesame': '', 'pork': '🐷', 'shellfish': '🦐', 'nuts': '🥜' };
type restriction = keyof typeof EMOJIS

export async function getShortMenu(location: Location, meal: Meal, day_offset: number = 0): Promise<Record<string, Record<string, FoodGroup>>> {
    try {
        const html = await fetchMenuHTML(BASE_URL + SHORTMENU_URL, location, meal, day_offset);
        console.log(html)
        // let menu: Record<string, Record<string, FoodGroup>> = {}
        // let parser = new JSDOM(html).window.document
        // // console.log(html)
        // let meals: HTMLElement[] = Array.from(parser.querySelectorAll('body > table:nth-of-type(2) > tbody > tr > td'))
        // console.log('meals:', meals)

        // // document.querySelector("td > table > tbody > tr:nth-child(1)")
        // for (const tr of meals) {
        //     let foodItems: Record<string, FoodGroup> = {}
        //     let mealName = tr.querySelector('td > div')?.textContent
            
        //     console.log('mealName:', mealName)
        //     // console.log(tr.querySelector('td > table > tr:nth-child(2) > td > table'))
        //     let foodList = Array.from(tr.querySelector('table > tr').children) // Corresponds to each meal (breakfast, lunch, dinner, late night)
        //     console.log('foodList:', foodList)
        //     let groupName = ''
        //     console.log('mealName:', foodList)
        //     for (const food of foodList) {
        //         let divider = food.querySelector('div.shortmenucats')
        //         if (divider) {
        //             groupName = divider.textContent.replaceAll('--', '').trim()
        //             foodItems[groupName] = {}   // If divider exists, then create a new category of food items
        //             continue
        //         }
        //         let foodName = food.querySelector('div.shortmenurecipes')?.textContent.trim()
        //         if (!foodName) {
        //             continue
        //         }
        //         console.log(foodName)
        //         let price: string = food.querySelector('div.shortmenuprices')?.textContent.trim()
        //         foodItems[groupName][foodName] = {
        //             name: foodName,
        //             price: price,
        //             portion: '',
        //             nutritionUrl: ''
        //         }
                
        //     }
        //     menu[mealName] = foodItems
        // }
        // return menu
    }
    catch (error: any) {
        console.error('getShortMenu():', error.message)
        return {}
    }
}

// async function parse

async function fetchMenuHTML(url: string, locationNum: Location, meal: Meal, day_offset: number = 0): Promise<string> {
    console.log(url, locationNum, meal, day_offset);
    const fullUrl = url + locationNum + MEAL_URL + meal;
    console.log(fullUrl);
    const cookie = { 'Cookie': Object.entries({ // UCSC menu website is weird and quirky and needs this specific cookie to work
        'WebInaCartLocation': locationNum,
        'WebInaCartDates': '',
        'WebInaCartMeals': '',
        'WebInaCartQtys': '',
        'WebInaCartRecipes': ''
    }).map(c => c.join('=')).join('; ') }
    return (await fetch(fullUrl, { headers: cookie })).text();
}

console.log(await getShortMenu(Location.CowellStevenson, Meal.Breakfast, 0));