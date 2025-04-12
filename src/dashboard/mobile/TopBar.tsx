import { AppShell, Burger, Group, Text } from "@mantine/core";
import { useState } from "react";

// this will need a shared state from the start
export function TopBar() {
    const [opened, toggleNavbar] = useState(false);
    return (
        <>
            <Group h="100%" px="md">
                <Burger opened={opened} onClick={() => {toggleNavbar(!opened)}}
                    hiddenFrom="sm" size="sm" />
                <Text size="xl">ucsc.info</Text>
            </Group>
        </>
    );
}

/*
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