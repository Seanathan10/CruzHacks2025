import "./TopBar.css";

export function TopBar() {
    return (
        <header className="app-bar">
            <label className="hamburger-menu">
                <input type="checkbox" />
            </label>
            <aside className="sidebar">
                <nav>
                    <div>holy fucking shit, 40000</div>
                    <div>mantine sucks don't use it</div>
                    <div>earthmover</div>
                </nav>
            </aside>
        </header>
    );
}

// this will need a shared state from the start
/*
export function TopBar() {
    const [opened, toggleNavbar] = useState(false);
    return (
        <AppShell
            header={{height: 50}}
            navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={() => {toggleNavbar(!opened)}}
                        hiddenFrom="sm" size="sm" />
                    <Text size="xl">ucsc.info</Text>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="mid">
                <Text size="xl">
                    holy fucking shit, 40000
                </Text>
                <Text size="xl">
                    earthmover
                </Text>
                <Text size="xl">
                    holy fucking shit, 40000
                </Text>
            </AppShell.Navbar>
        </AppShell>
    );
}
*/