import {TopBar as MobileTopBar} from "../dashboard/mobile/TopBar";
import {TopBar as DesktopTopBar} from "../dashboard/desktop/TopBar";
import { useContext } from "react"
import { Context } from "../Context";
import { Container, Grid, Text } from "@mantine/core";
import DateHeader from "./DateHeader";
import MealHeader from "./MealHeader";
import FoodBlock from "./FoodBlock";

export default function Menu() {
    const contextValues = useContext(Context);
    return (
        <>
            {contextValues?.mobile ? (<MobileTopBar />) : (<DesktopTopBar />)}
            <DateHeader>Sunday, April 20, 2025</DateHeader>
            <MealHeader>Breakfast</MealHeader>
            <Grid>
                <Grid.Col span={12}>
                    <FoodBlock>Eggs Benedict</FoodBlock>
                </Grid.Col>
                <Grid.Col span={12}>
                    <FoodBlock>Oatmeal</FoodBlock>
                </Grid.Col>
            </Grid>
            <MealHeader>Lunch</MealHeader>
            <FoodBlock>Karrage</FoodBlock>
            <FoodBlock>Kimbap</FoodBlock>
            <MealHeader>Dinner</MealHeader>
            <FoodBlock>Pan-Fried Salmon</FoodBlock>
            <FoodBlock>Beef Bourginon</FoodBlock>
            <Text size="lg">allergen free halal chicken</Text>
        </>
    )
}