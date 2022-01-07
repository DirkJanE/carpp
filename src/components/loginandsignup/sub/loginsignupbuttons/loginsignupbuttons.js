import {RowContainer, StyledText} from "../../../../style/Style";
import {useState} from "react";

export const Loginsignupbuttons = (props) => {
    const [activeButtonColor] = useState("#cb6939");
    const [notActiveButtonColor] = useState("#F58040");

    return (
    <RowContainer>
        <StyledText style={{backgroundColor: props.loginFieldActive ? activeButtonColor : notActiveButtonColor}} onClick={props.handleClickLoginButton}>
            Login
        </StyledText>
        <StyledText style={{backgroundColor: props.loginFieldActive ? notActiveButtonColor : activeButtonColor}} onClick={props.handleClickSignupButton}>
            Sign Up
        </StyledText>
    </RowContainer>
    );
}
