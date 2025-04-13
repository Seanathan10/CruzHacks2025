import { useContext } from "react"
import { Context } from "../../Context.tsx";
import DateHeader from "../DateHeader.tsx";
import MealHeader from "../MealHeader.tsx";
import FoodBlock from "../FoodBlock.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const foodList: any = {display: 'flex', gap: "5px", flexWrap: 'wrap', justifyContent: 'center'};

export function Menu({children}: {children: any}) {
    const contextValues = useContext(Context);
    // const menuArray = Object.entries(children);
    // console.log('child entries', menuArray);
    return (
        <>
            <Swiper slidesPerView={1} spaceBetween={0}
                allowSlideNext={!contextValues?.drawer} allowSlidePrev={!contextValues?.drawer}
                style={{top: '100px'}}
            >
                <SwiperSlide key='Crown/Merrill'>
                    {children.map((meal: any) =>
                        <div key={meal[0]}>
                        <MealHeader>{meal[0]}</MealHeader>
                        {Object.entries(meal[1]).map((subcategory: any) => 
                            <div key={subcategory[0] as string}>
                                <div>{subcategory[0]}</div>
                                <div style={foodList}>
                                    {Object.entries(subcategory[1]).map((item: any) =>
                                        <FoodBlock key={item[0]}>{item[1]}</FoodBlock>
                                    )}
                                </div>
                            </div>
                        )}
                        {/* <div key={item[1]}>{item}</div> */}
                    </div>
                    )}
                </SwiperSlide>
                <SwiperSlide key='Cowell/Stevenson'>
                    {menuArray.map((meal: any) =>
                        <div key={meal[0]}>
                        <MealHeader>{meal[0]}</MealHeader>
                        {Object.entries(meal[1]).map((subcategory: any) => 
                            <div key={subcategory[0] as string}>
                                <div>{subcategory[0]}</div>
                                <div style={foodList}>
                                    {Object.entries(subcategory[1]).map((item: any) =>
                                        <FoodBlock key={item[0]}>{item[1]}</FoodBlock>
                                    )}
                                </div>
                            </div>
                        )}
                        {/* <div key={item[1]}>{item}</div> */}
                    </div>
                    )}
                </SwiperSlide>
            </Swiper>
        </>
    );
}
