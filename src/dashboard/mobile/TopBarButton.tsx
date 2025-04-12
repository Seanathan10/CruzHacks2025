import { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../../Context";

export default function TopBarButton({children}: {children: string}) {
    const navigate = useNavigate();
    const cv = useContext(Context);
    return (
        <div onClick={() => {
            cv?.drawerFunction(false);
            if (children === 'ucsc.info') {
                navigate('/');
            } else {
                navigate(`/${children}`);
            }
        }}>{children}</div>
    );
}