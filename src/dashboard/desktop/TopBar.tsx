import './TopBar.css';
import TopBarButton from './TopBarButton';

import ThemeToggle from '../../ThemeChanger';

export function TopBar() {
    const topBarButtons = ['ucsc.info', 'news', 'peak', 'menu', 'courses', 'insights'];
    
    return (
        <header className="app-bar">
            <nav className="nav-bar__nav">
                {topBarButtons.map((item) => (
                    <TopBarButton key={item}>{item}</TopBarButton>
                ))}
            </nav>
            <div className="nav-bar__theme-toggle">
                <ThemeToggle />
            </div>
        </header>
    );
}

