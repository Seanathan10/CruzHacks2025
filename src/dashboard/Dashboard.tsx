import Courses from "./Courses";
import FoodMenu from "./FoodMenu";
import {TopBar as MobileTopBar} from "./mobile/TopBar";
import {TopBar as DesktopTopBar} from "./desktop/TopBar";
import {useContext} from "react";
import { Context } from "../Context";

export default function Dashboard() {
    const contextValues = useContext(Context);
    return (
        <>
            {contextValues?.mobile ? (<MobileTopBar />) : (<DesktopTopBar />)}
                <Courses/>
                <FoodMenu/>
        </>
    )
}
