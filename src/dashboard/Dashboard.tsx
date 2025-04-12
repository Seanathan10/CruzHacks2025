import Courses from "./Courses";
import FoodMenu from "./FoodMenu";
import {TopBar as MobileTopBar} from "./mobile/TopBar";
import {Drawer as MobileDrawer} from "./mobile/Drawer";
import {TopBar as DesktopTopBar} from "./desktop/TopBar";
import {useContext, useState} from "react";
import { Context } from "../Context";
import { AppShell } from "@mantine/core";

export default function Dashboard() {
    const contextValues = useContext(Context);
    const [opened, toggleNavbar] = useState(false);
    return (
        <AppShell header={{height: 50}}
            navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
        >
            <AppShell.Header>
                {contextValues?.mobile ? (<MobileTopBar />) : (<DesktopTopBar />)}
            </AppShell.Header>
            {contextValues?.mobile ? (<AppShell.Navbar p="md">
                <MobileTopBar/>
            </AppShell.Navbar>) : (<></>)}
            <AppShell.Navbar p="md">
                <MobileDrawer/>
            </AppShell.Navbar>
            <AppShell.Main>
                <Courses/>
                <FoodMenu/>
            </AppShell.Main>
        </AppShell>
    );
}
