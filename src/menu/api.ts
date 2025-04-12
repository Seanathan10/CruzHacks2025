const BASE_URL = 'http://localhost:8000'

export enum Location {
    CowellStevenson = 'Cowell/Stevenson',
    CrownMerrill = 'Crown/Merrill',
    NineTen = 'Nine/Ten',
    PorterKresge = 'Porter/Kresge',
    RachelCarsonOakes = 'Carson/Oakes',
}

interface FoodGroup {
    [key: string]: FoodItem
}

interface FoodItem {
    name: string
    restrictions: string[]
    portion?: string
    price?: string
    nutritionUrl?: string
}

export type Meal = Record<string, FoodGroup>

export type Menu = Record<string, Meal>

export async function getMenu(location: string, day_offset: number = 0): Promise<Menu> {
    // console.log('location:', Location[location] as string)
    const result = await fetch(BASE_URL + '/menu?location=' + location + '&day_offset=' + day_offset).then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch menu: ' + response.statusText);
        }
        return response;
    }).catch((error) => {
        console.error('Error fetching menu: ' + error);
    });

    if (!result) {
        return {};
    }
    
    const data = await result.json();
    return data;
}

export async function getAllLocationMenus(day_offset: number = 0): Promise<Record<string, Menu>> {
    const locationMenus: Record<string, Menu> = {};
    for (const location of Object.values(Location)) {
        const menu = await getMenu(location, day_offset);
        locationMenus[location] = menu;
    }
    return locationMenus;
}

console.log(await getAllLocationMenus(0));

console.log(await getMenu(Location.CowellStevenson, 0));