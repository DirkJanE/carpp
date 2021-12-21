import {StyledTitle} from "../../style/Style";

export const Title = (props) => {

    return (
        <StyledTitle style={{color: props.color, fontSize: props.fontsize, textShadow: props.textshadow, height: props.height}}>
            C a R p p
        </StyledTitle>
    )
}
