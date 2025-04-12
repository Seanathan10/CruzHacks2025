import { Container, Text } from "@mantine/core";

export default function FoodBlock({children}: {children: String}) {
    return (
        <Container bg='gold' style={{border: '2px', outline: 'solid'}}>
            <Text size="md">{children}</Text>
        </Container>
    );
}