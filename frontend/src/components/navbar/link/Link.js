import { useState, useEffect } from "react";
import { Line } from "../line/Line";
import {StyledNavbarLinks} from "../style/navbarstyle";

export const Link = (props) => {
    const [x1, setX1] = useState();
    const [y1, setY1] = useState(); 
    const [x2, setX2] = useState();
    const [y2, setY2] = useState();
    
    useEffect(() => {
        if (props.names === "Maps") {
            setX1("25");
            setY1("3");
            setX2("75");
            setY2("3");

        } else if (props.names === "Berichten") {
            setX1("10");
            setY1("3");
            setX2("90");
            setY2("3");

        } else {
            setX1("20");
            setY1("3");
            setX2("80");
            setY2("3");
        }
    }, [props.names]);

    //console.log(props.opacity)

    return (

    <StyledNavbarLinks onClick={props.setcomponent}>
        {props.names}
        <Line x1={x1} y1={y1} x2={x2} y2={y2} opacity={props.opacity}/>
    </StyledNavbarLinks>

    );
}
