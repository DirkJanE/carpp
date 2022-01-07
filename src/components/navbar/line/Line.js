import {StyledLine, StyledSVG} from "../style/navbarstyle";


export const Line = (props) => {

    return (
        <StyledSVG style={{height: "0.5vh", width: "5vw"}}>
            <StyledLine x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} style={{opacity: props.opacity}}></StyledLine>
        </StyledSVG>
    );
}
