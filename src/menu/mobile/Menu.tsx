import { useContext } from "react"
import { Context } from "../../Context.tsx";
import DateHeader from "../DateHeader.tsx";
import MealHeader from "../MealHeader.tsx";
import FoodBlock from "../FoodBlock.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const foodList: any = {display: 'flex', gap: "5px", flexWrap: 'wrap', justifyContent: 'center'};

export function Menu() {
    const contextValues = useContext(Context);
    return (
        <>
            <Swiper slidesPerView={1} spaceBetween={0}
                allowSlideNext={!contextValues?.drawer} allowSlidePrev={!contextValues?.drawer}>
            <SwiperSlide key='cowell'>
                <div>
                    <DateHeader>Wednesday, January 6, 2021</DateHeader>
                    <MealHeader>Breakfast</MealHeader>
                    <div style={foodList}>
                        {['Vodka'].map((item) => (
                            <FoodBlock key={item}>{item}</FoodBlock>
                        ))}
                    </div>
                    <MealHeader>Lunch</MealHeader>
                    <div style={foodList}>
                        {['Lunchly Fiesta Nachos', 'Orange Chicken'].map((item) => (
                            <FoodBlock key={item}>{item}</FoodBlock>
                        ))}
                    </div>
                    <MealHeader>Dinner</MealHeader>
                    <div style={foodList}>
                        {['Allergen Free Halal Chicken', 'Beyond Bunger', 'Gordon Ramsay\'s Grilled Cheese'].map((item) => (
                            <FoodBlock key={item}>{item}</FoodBlock>
                        ))}
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide key='crown'>
                <div>
                    <DateHeader>Sunday, April 20, 2025</DateHeader>
                    <MealHeader>Breakfast</MealHeader>
                    <div style={foodList}>
                        {['Eggs Benedict', 'Oatmeal', 'Miso Soup'].map((item) => (
                            <FoodBlock key={item}>{item}</FoodBlock>
                        ))}
                    </div>
                    <MealHeader>Lunch</MealHeader>
                    <div style={foodList}>
                        {['Karaage', 'Kimbap', 'Chicken Bake', 'Chocolate Cookie'].map((item) => (
                            <FoodBlock key={item}>{item}</FoodBlock>
                        ))}
                    </div>
                    <MealHeader>Dinner</MealHeader>
                    <div style={foodList}>
                        {['Beef Bourginon', 'Pan-Fried Salmon', 'Jambalaya'].map((item) => (
                            <FoodBlock key={item}>{item}</FoodBlock>
                        ))}
                    </div>
                </div>
            </SwiperSlide>

            </Swiper>
        </>
    )
}


/*

        <Swiper spaceBetween={50}>
        <SwiperSlide key='cowell'>
            <div style={{maxWidth: '800px'}}>
                {contextValues?.mobile ? (<MobileTopBar />) : (<DesktopTopBar />)}
                <DateHeader>Wednesday, January 6, 2021</DateHeader>
                <MealHeader>Breakfast</MealHeader>
                <div style={foodList}>
                    {['Vodka'].map((item) => (
                        <FoodBlock key={item}>{item}</FoodBlock>
                    ))}
                </div>
                <MealHeader>Lunch</MealHeader>
                <div style={foodList}>
                    {['Lunchly Fiesta Nachos', 'Orange Chicken'].map((item) => (
                        <FoodBlock key={item}>{item}</FoodBlock>
                    ))}
                </div>
                <MealHeader>Dinner</MealHeader>
                <div style={foodList}>
                    {['Allergen Free Halal Chicken', 'Beyond Bunger', 'Gordon Ramsay\'s Grilled Cheese'].map((item) => (
                        <FoodBlock key={item}>{item}</FoodBlock>
                    ))}
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide key='crown'>
            <div style={{maxWidth: '800px'}}>
                {contextValues?.mobile ? (<MobileTopBar />) : (<DesktopTopBar />)}
                <DateHeader>Sunday, April 20, 2025</DateHeader>
                <MealHeader>Breakfast</MealHeader>
                <div style={foodList}>
                    {['Eggs Benedict', 'Oatmeal', 'Miso Soup'].map((item) => (
                        <FoodBlock key={item}>{item}</FoodBlock>
                    ))}
                </div>
                <MealHeader>Lunch</MealHeader>
                <div style={foodList}>
                    {['Karaage', 'Kimbap', 'Chicken Bake', 'Chocolate Cookie'].map((item) => (
                        <FoodBlock key={item}>{item}</FoodBlock>
                    ))}
                </div>
                <MealHeader>Dinner</MealHeader>
                <div style={foodList}>
                    {['Beef Bourginon', 'Pan-Fried Salmon', 'Jambalaya'].map((item) => (
                        <FoodBlock key={item}>{item}</FoodBlock>
                    ))}
                </div>
            </div>
        </SwiperSlide>

        </Swiper>

*/