import { Container, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useNavigate } from "react-router";

export default function TopBarButton({children}: {children: string}) {
    const {hovered, ref} = useHover();
    const navigate = useNavigate();
    return (
        <Container style={{backgroundColor: hovered ? 'darkblue' : 'white'}}
            onClick={() => {
                if (children === 'ucsc.info') {
                    navigate('/');
                } else {
                    navigate(`/${children}`);
                }
            }}
        >
            {/* this will probably be a button later */}
            <Text size="xl" ref={ref} c={hovered ? "white" : "black"}>
                {children}
            </Text>
        </Container>
    );

}