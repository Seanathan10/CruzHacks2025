import { useContext } from "react"
import { Context } from "../../Context.tsx";

import MealHeader from "../MealHeader.tsx";
import FoodBlock from "../FoodBlock.tsx";
import { Swiper, SwiperSlide } from "swiper/react";

// @ts-expect-error gekrnhiowu
import 'swiper/css';

const foodList: any = {display: 'flex', gap: "5px", flexWrap: 'wrap', justifyContent: 'center'};

export function Menu({children}: {children: any}) {
    const contextValues = useContext(Context);
    const menuArrays = Object.entries(children);
    console.log('child entries', menuArrays);
    return (
        <>
            <Swiper slidesPerView={1} spaceBetween={0}
                allowSlideNext={!contextValues?.drawer} allowSlidePrev={!contextValues?.drawer}
                style={{top: '100px'}}
            >
                {menuArrays.map((dh: any) => {
                    const dhArray = Object.entries(dh);
                    console.log('DH INFO', dhArray);
                    const locationName = dhArray[0][1] as unknown;
                    const mealsInfo = (dhArray[1][1] as unknown) as Array <any>;
                    const mealsArray = Object.entries(mealsInfo);
                    console.log('LOCATION NAME', locationName);
                    console.log('DH ARRAY 1', mealsArray);
                    return (
                        <SwiperSlide key={locationName as string} style={{maxHeight: '80vh', top: '0px', 'overflowY': 'scroll'}}>
                            <h2>{locationName as string}</h2>
                            {mealsArray.map((meal: any) => {
                                console.log("MEAL", meal);
                                return (
                                    <div key={meal[0]} style={{paddingBottom: '20px'}}>
                                    <MealHeader>{meal[0]}</MealHeader>
                                    {Object.entries(meal[1]).map((subcategory: any) => 
                                        <div key={subcategory[0] as string}>
                                            <div style={{textAlign: 'left', padding: "10px 5px 5px"}}>{subcategory[0]}</div>
                                            <div style={foodList}>
                                                {Object.entries(subcategory[1]).map((item: any) =>
                                                    <FoodBlock key={item[0]}>{item[1]}</FoodBlock>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {/* <div key={item[1]}>{item}</div> */}
                                    </div>
                                );
                            })}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
