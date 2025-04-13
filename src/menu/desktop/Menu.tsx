import {TopBar as MobileTopBar} from "../../dashboard/mobile/TopBar.tsx";
import {TopBar as DesktopTopBar} from "../../dashboard/desktop/TopBar.tsx";
import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context.tsx";
import {MenuPanel} from "../MenuPanel.tsx";
import {type Menu} from "../api.ts";

export function Menu({children}: {children: Record<string, Menu>}) {
    const contextValues = useContext(Context);
    
    return (
        <div style={{display: 'flex', flexDirection: 'row', gap: 12.5, marginLeft: '0.5%'}}>
            {/* {Object.entries(children) */}
            {Object.entries(children)
                .filter(([_, menu]) =>
                  // Filter only if at least one meal has at least one non-empty food group
                  Object.values(menu).some(meal =>
                    Object.values(meal).some(foodGroup =>
                      Object.keys(foodGroup).length > 0
                    )
                  )
                ).map(([location, menu]: [string, Menu], i: number) => (
                // <>
                <div key={location} style={{display: 'flex', overflowY: 'visible', "--delay": `${i * 150}ms` } as React.CSSProperties}>
                    <MenuPanel key={location} name={location} menu={menu} width="100%"></MenuPanel>
                </div>
                // </>  
            ))}
        </div>
    )
}