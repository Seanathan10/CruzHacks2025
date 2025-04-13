import { useContext, useEffect, useRef } from "react"
import { Context } from "../../Context.tsx";
import {MenuPanel} from "../MenuPanel.tsx";
import {type Menu} from "../api.ts";

export function Menu({children}: {children: Record<string, Menu>}) {
    const cv = useContext(Context);
    const measureRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateScroll = () => {
            if (measureRef.current) {
                console.log("measureRef", measureRef.current.scrollHeight - measureRef.current.clientHeight);
                cv?.setDesktopMenuHeight(measureRef.current.scrollHeight - measureRef.current.clientHeight + 25);
            }
        }
        updateScroll();
        window.addEventListener('resize', updateScroll);
        return () => window.removeEventListener('resize', updateScroll);
        // const target = measureRef?.current || window;
        // target.addEventListener('scroll', handleScroll);
        // return () => target.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div ref={measureRef}style={{display: 'flex', flexDirection: 'row', gap: 12.5, marginLeft: '0.5%', maxHeight: '83vh',
                overflowY: 'auto', position: 'fixed', top: '125px'}}
            >
                {Object.entries(children).map(([location, menu]: [string, Menu], i: number) => (
                    // <>
                    <div className={'menuPanel'} key={location} style={{display: 'flex', overflow: 'visible', "--delay": `${i * 150}ms`,
                        flex: 1, minWidth: '400px', height: `${cv?.desktopMenuHeight}px`,
                        position: 'relative'} as React.CSSProperties}
                    >
                        <MenuPanel key={location} name={location} menu={menu} width="100%"></MenuPanel>
                    </div>
                    // </>  
                ))}
            </div>
        </>
    );
}