import {RowContainer, StyledText} from "../../../../style/Style";
import {useState} from "react";

export const Loginsignupbuttons = (props) => {
    const [activeButtonColor] = useState("#F58040FF");
    const [notActiveButtonColor] = useState("gray");

    return (
    <RowContainer>
        <RowContainer>
            <StyledText style={{backgroundColor: props.loginFieldActive ? activeButtonColor : notActiveButtonColor}} onClick={props.handleClickLoginButton}>
                Login
            </StyledText>
        </RowContainer>
        <StyledText style={{backgroundColor: props.loginFieldActive ? notActiveButtonColor : activeButtonColor}} onClick={props.handleClickSignupButton}>
            Sign Up
        </StyledText>
    </RowContainer>
    );
}
