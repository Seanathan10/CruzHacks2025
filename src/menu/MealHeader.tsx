import { Container, Text } from "@mantine/core";

export default function MealHeader({children}: {children: string}) {
    // Dinner
    return (
        <Text size="xl">{children}</Text>
    );
}
