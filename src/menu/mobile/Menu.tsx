import {TopBar as MobileTopBar} from "../../dashboard/mobile/TopBar.tsx";
import {TopBar as DesktopTopBar} from "../../dashboard/desktop/TopBar.tsx";
import { useContext } from "react"
import { Context } from "../../Context.tsx";
import DateHeader from "../DateHeader.tsx";
import MealHeader from "../MealHeader.tsx";
import FoodBlock from "../FoodBlock.tsx";

const foodList: any = {display: 'flex', gap: "5px", flexWrap: 'wrap'};

export default function Menu() {
    const contextValues = useContext(Context);
    return (
        <div style={{maxWidth: '800px'}}>
            {contextValues?.mobile ? (<MobileTopBar />) : (<DesktopTopBar />)}
            <DateHeader>Sunday, April 20, 2025</DateHeader>
            <MealHeader>Breakfast</MealHeader>
            <div style={foodList}>
                {['Eggs Benedict', 'Oatmeal', 'Miso Soup'].map((item) => (
                    <FoodBlock>{item}</FoodBlock>
                ))}
            </div>
            <MealHeader>Lunch</MealHeader>
            <div style={foodList}>
                {['Karaage', 'Kimbap', 'Chicken Bake', 'Chocolate Cookie'].map((item) => (
                    <FoodBlock>{item}</FoodBlock>
                ))}
            </div>
            <MealHeader>Dinner</MealHeader>
            <div style={foodList}>
                {['Beef Bourginon', 'Pan-Fried Salmon', 'Jambalaya'].map((item) => (
                    <FoodBlock>{item}</FoodBlock>
                ))}
            </div>
        </div>
    )
}