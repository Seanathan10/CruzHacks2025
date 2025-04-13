import { useContext } from "react";
import { Context } from "../Context";
import './Menu.css';

export default function DateHeader({children}: {children: string}) {
    const contextValues = useContext(Context);
    return (
        <div className="dateHeader" style={contextValues?.mobile ? {top: "50px", position: "fixed"} : {fontSize: 15, zIndex: 1, position: "fixed", left: 0, right: 0, height: 95, top: "35px"}}>
            {contextValues?.mobile ? <h2>{children}</h2> : <h1>{children}</h1>}
        </div>
    );
}