import { useContext } from "react";
import { Context } from "../Context";

export default function DateHeader({children}: {children: string}) {
    const contextValues = useContext(Context);
    return (
        <div style={contextValues?.mobile ? {top: "50px", position: "fixed"} : {}}>
            {contextValues?.mobile ? <h2>{children}</h2> : <h1>{children}</h1>}
        </div>
    );
}