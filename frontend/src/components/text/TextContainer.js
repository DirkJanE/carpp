import {StyledText} from "../../style/Style";

export const TextContainer = (props) => {

    return (
        <StyledText style={{height: "3vh", width: "76vw", backgroundColor: "#cb6939"}}>
            {props.text}
        </StyledText>
    )
}
