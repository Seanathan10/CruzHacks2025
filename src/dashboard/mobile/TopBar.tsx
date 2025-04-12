import { AppShell, Burger, Group, Text } from "@mantine/core";
import { useState } from "react";

// this will need a shared state from the start
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
                    {/* this line is gonna later take state on which page we're on */}
                    <Text size="xl">ucsc.info</Text>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="mid">
                {/* all text is gonna be changed to buttons */}
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

/*
import { AppShell, Group, Text } from "@mantine/core";

export function TopBar() {
    return (
        <AppShell
            header={{height: 50}}>
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Text size="xl">
                        ucsc.info
                    </Text>
                    <Text size="xl">
                        news
                    </Text>
                    <Text size="xl">
                        menu
                    </Text>
                    <Text size="xl">
                        courses
                    </Text>
                </Group>
            </AppShell.Header>
        </AppShell>
    );
}
*/