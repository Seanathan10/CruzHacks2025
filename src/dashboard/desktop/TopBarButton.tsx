import { useNavigate } from "react-router";

export default function TopBarButton({children}: {children: string}) {
    const navigate = useNavigate();
    return (
        <a href='#' onClick={() => {
            if (children === 'ucsc.info') {
                navigate('/');
            } else {
                navigate(`/${children}`);
            }
        }}>{children}</a>
    );
}

/*
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
            <Text size="xl" ref={ref} c={hovered ? "white" : "black"}>
                {children}
            </Text>
        </Container>
    );
}
*/