import {TopBar as MobileTopBar} from "../dashboard/mobile/TopBar";
import {TopBar as DesktopTopBar} from "../dashboard/desktop/TopBar";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import {Menu as MobileMenu} from './mobile/Menu';
import {Menu as DesktopMenu} from './desktop/Menu';

export default function Menu() {
    const contextValues = useContext(Context);
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/menu?location=Cowell/Stevenson')
            .then((response) => response.json())
            .then((result) => {
                console.log('RESULT', result);
                setMenuData(result);
            })
            .catch((error) => console.log('failed to fetch and set menu data:', error))
    }, [])
    return (
        <>
            {contextValues?.mobile ? (<MobileTopBar />) : (<DesktopTopBar />)}
            <div style={{width: '100vw', position: 'fixed', left: '0px', top: '30px'}}>
                {contextValues?.mobile ? (<MobileMenu>{menuData}</MobileMenu>) : (<DesktopMenu>{menuData}</DesktopMenu>)}
            </div>
        </>
    );
}