import { AppShell, Container, Group, Text } from "@mantine/core";
import TopBarButton from "./TopBarButton";

export function TopBar() {
    return (
        <AppShell
            header={{height: 50}}>
            <AppShell.Header>
                <Group h="100%" px="md">
                    {/* this code below is gonna be changed to a button*/}
                    <TopBarButton>ucsc.info</TopBarButton>
                    <TopBarButton>news</TopBarButton>
                    <TopBarButton>peak</TopBarButton>
                    <TopBarButton>menu</TopBarButton>
                </Group>
            </AppShell.Header>
        </AppShell>
    );
}