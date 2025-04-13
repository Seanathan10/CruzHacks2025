import {TopBar as MobileTopBar} from "../../dashboard/mobile/TopBar.tsx";
import {TopBar as DesktopTopBar} from "../../dashboard/desktop/TopBar.tsx";
import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context.tsx";
import {MenuPanel} from "../MenuPanel.tsx";
import {type Menu} from "../api.ts";

export function Menu({children}: {children: Record<string, Menu>}) {
    const contextValues = useContext(Context);
    
    return (
        <div style={{display: 'flex', flexDirection: 'row', gap: '0px'}}>
            {Object.entries(children).map(([location, menu]: [string, Menu]) => (
                <>
                    <MenuPanel key={location} name={location} menu={menu} width="100%"></MenuPanel>
                </>
            ))}
        </div>
    )
}