
import {TopBar as MobileTopBar} from "../dashboard/mobile/TopBar";
import {TopBar as DesktopTopBar} from "../dashboard/desktop/TopBar";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import {Menu as MobileMenu} from './mobile/Menu';
import {Menu as DesktopMenu} from './desktop/Menu';
import DateHeader from "./DateHeader";
import {getAllLocationMenus, type Menu} from "./api";
import {Location} from "./api";
import './Menu.css'
import {MenuPanel} from "./MenuPanel";

export default function MenuPage() {
    const contextValues = useContext(Context);
    const [menuData, setMenuData] = useState<Record<string, Menu>>({});
    useEffect(() => {
        (async () => {
            const menu = await getAllLocationMenus(0);

            if (!menu) {
                return;
            }
            console.log('response:', menu, typeof menu, JSON.stringify(menu));
            setMenuData(menu);
        })()
    }, [])
    return (
        <>
            {contextValues?.mobile ? (<MobileTopBar />) : (<DesktopTopBar />)}
            <DateHeader>Wednesday, January 6, 2021</DateHeader>
            <div style={{width: '100vw', height: '100vh', overflow: 'scroll', position: 'fixed', left: '0px', top: '30px'}}>
            <div
            //   key={i}
              className="MenuPanelDelay"
              style={{ "--delay": `${1 * 115}ms` } as React.CSSProperties}
            >

                {contextValues?.mobile ? (<MobileMenu>{menuData[Location.CowellStevenson]}</MobileMenu>) : (<DesktopMenu>{menuData}</DesktopMenu>)}
            </div>
            </div>
        </>
    );
}