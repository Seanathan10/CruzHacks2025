import {MantineProvider} from "@mantine/core";
import Courses from "./Courses";
import FoodMenu from "./FoodMenu";
import News from "./news/News";
import {TopBar as MobileTopBar} from "./mobile/TopBar";
import {TopBar as DesktopTopBar} from "./desktop/TopBar";
import { useMediaQuery } from '@mantine/hooks';
import {Context} from './Context.tsx';

export default function Dashboard() {
  const contextValues = {mobile: useMediaQuery('(max-width: 600px)')};
    return (
        <>
            <Context.Provider value={contextValues}>
                {contextValues.mobile ? (<MobileTopBar />) : (<DesktopTopBar />)}
                <News/>
                <Courses/>
                <FoodMenu/>
            </Context.Provider>
        </>
    )
}