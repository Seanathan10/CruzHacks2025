import { Group } from "@mantine/core";
import TopBarButton from "./TopBarButton";

export function TopBar() {
    return (
        <Group h="100%" px="md">
            <TopBarButton>ucsc.info</TopBarButton>
            <TopBarButton>news</TopBarButton>
            <TopBarButton>peak</TopBarButton>
            <TopBarButton>menu</TopBarButton>
        </Group>
    );
}

/*
export function TopBar() {
    return (
        <AppShell
            header={{height: 50}}>
            <AppShell.Header>
                <Group h="100%" px="md">
                    }
                    <TopBarButton>ucsc.info</TopBarButton>
                    <TopBarButton>news</TopBarButton>
                    <TopBarButton>peak</TopBarButton>
                    <TopBarButton>menu</TopBarButton>
                </Group>
            </AppShell.Header>
        </AppShell>
    );
}
*/