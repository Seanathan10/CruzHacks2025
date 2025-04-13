import {TopBar as MobileTopBar} from "../../dashboard/mobile/TopBar.tsx";
import {TopBar as DesktopTopBar} from "../../dashboard/desktop/TopBar.tsx";
import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context.tsx";
import DateHeader from "../DateHeader.tsx";
import MealHeader from "../MealHeader.tsx";
import FoodBlock from "../FoodBlock.tsx";
import {MenuPanel} from "../MenuPanel.tsx";
import {getMenu, Location, type Menu} from "../api.ts";

export function Menu({children}: {children: Menu}) {
    const contextValues = useContext(Context);

    const [menu, setMenu] = useState({});
    
    useEffect(() => {
        (async () => {
            
            const response = await getMenu(Location.CowellStevenson, 0);
            if (!response) {
                return;
            }
            console.log('response:', response, typeof response, JSON.stringify(response));
            setMenu(response);
        })()
    }, []);
    return (
        <>
            {/* {contextValues?.mobile ? (<MobileTopBar />) : (<DesktopTopBar />)} */}
            <MenuPanel width="33%" menu={children}/>
            {/* <DateHeader>Sunday, April 20, 2025</DateHeader>
            <MealHeader>Breakfast</MealHeader>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {['Eggs Benedict', 'Oatmeal'].map((item) => (
                    <FoodBlock>{item}</FoodBlock>
                ))}
            </div>
            <MealHeader>Lunch</MealHeader>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {['Karrage', 'Kimbap'].map((item) => (
                    <FoodBlock>{item}</FoodBlock>
                ))}
            </div>
            <MealHeader>Dinner</MealHeader>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {['Beef Bourginon', 'Pan-Fried Salmon'].map((item) => (
                    <FoodBlock>{item}</FoodBlock>
                ))}
            </div> */}
        </>
    )
}