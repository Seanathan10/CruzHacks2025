import {TopBar as MobileTopBar} from "../dashboard/mobile/TopBar";
import {TopBar as DesktopTopBar} from "../dashboard/desktop/TopBar";
import { useContext } from "react";
import { Context } from "../Context";
import {Menu as MobileMenu} from './mobile/Menu';
import {Menu as DesktopMenu} from './desktop/Menu';

export default function Menu() {
    const contextValues = useContext(Context);
    return (
        <>
            {contextValues?.mobile ? (<MobileTopBar />) : (<DesktopTopBar />)}
            <div style={{width: '100vw', position: 'fixed', left: '0px', top: '30px'}}>
                {contextValues?.mobile ? (<MobileMenu />) : (<DesktopMenu />)}
            </div>
        </>
    );
}