import { Container, Text } from "@mantine/core";

export default function DateHeader({children}: {children: string}) {
    // Sunday, April 20, 2025
    return (
        <Text size="xl">{children}</Text>
    );
}