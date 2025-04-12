import { useContext } from "react";
import "./TopBar.css";
import TopBarButton from "./TopBarButton";
import { Context } from "../../Context";

export function TopBar() {
    const topBarButtons = ['ucsc.info', 'news', 'peak', 'menu', 'courses'];
    const cv = useContext(Context);
    return (
        <>
            <header className="app-bar">
                <button onClick={() => {cv?.drawerFunction(!(cv?.drawer))}}>
                    hamburger
                </button>
                <div className="app-bar__title">ucsc.info</div>
            </header>

            <div className={`drawer ${cv?.drawer ? 'open' : ''}`}>
                <nav className="drawer__nav">
                    {topBarButtons.map((item) => (
                        <TopBarButton key={item}>{item}</TopBarButton>
                    ))}
                </nav>
            </div>
        </>
    );
}
