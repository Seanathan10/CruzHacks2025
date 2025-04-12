import { useContext } from "react"
import { Context } from "../../Context";
import DateHeader from "../DateHeader.tsx";
import MealHeader from "../MealHeader.tsx";
import FoodBlock from "../FoodBlock.tsx";

export function Menu() {
    const contextValues = useContext(Context);
    return (
        <>
            <DateHeader>Sunday, April 20, 2025</DateHeader>
            <MealHeader>Breakfast</MealHeader>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {['Eggs Benedict', 'Oatmeal'].map((item) => (
                    <FoodBlock key={item}>{item}</FoodBlock>
                ))}
            </div>
            <MealHeader>Lunch</MealHeader>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {['Karrage', 'Kimbap'].map((item) => (
                    <FoodBlock key={item}>{item}</FoodBlock>
                ))}
            </div>
            <MealHeader>Dinner</MealHeader>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {['Beef Bourginon', 'Pan-Fried Salmon'].map((item) => (
                    <FoodBlock key={item}>{item}</FoodBlock>
                ))}
            </div>

        </>
    )
}