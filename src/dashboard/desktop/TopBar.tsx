import { AppShell, Group, Text } from "@mantine/core";

export function TopBar() {
    return (
        <AppShell
            header={{height: 50}}>
            <AppShell.Header>
                <Group h="100%" px="md">
                    {/* this code below is gonna be changed to a button*/}
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
