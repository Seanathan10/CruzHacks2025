
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
import '../Loading.css';
import {Error, Loading} from "../Loading";

export default function MenuPage() {
    const contextValues = useContext(Context);
    const [menuData, setMenuData] = useState<Record<string, Menu>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        (async () => {
            const menu = await getAllLocationMenus(0);

            if (!menu) {
                setError(true);
                setLoading(false);
                return;
            }
            // console.log('response:', menu, typeof menu, JSON.stringify(menu));
            setMenuData(menu);
            setLoading(false);
        })()
    }, []);
    return (
        <>
            {contextValues?.mobile ? (<MobileTopBar />) : (<DesktopTopBar />)}
            <DateHeader>Wednesday, January 6, 2021</DateHeader>
            {loading ? <Loading/> : error ? <Error>Menu Failed to Load</Error> : (
            <div style={{width: '100vw', height: '100vh', overflow: 'scroll', position: 'fixed', left: '0px', top: '30px'}}>
                <div className="MenuPanelDelay"
                style={{ "--delay": `${1 * 115}ms` } as React.CSSProperties}
                >
                    {contextValues?.mobile ? (<MobileMenu>{menuData[Location.CowellStevenson]}</MobileMenu>) : (<DesktopMenu>{menuData}</DesktopMenu>)}
                </div>
            </div>
            )}
        </>
    );
}