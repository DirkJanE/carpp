import {LoginSignupFieldsContainer, StyledButton} from "../../../style/Style";
import {Labelandinput} from "../sub/labelandinput/Labelandinput";

export const Login = () => {

    return (
        <LoginSignupFieldsContainer>
            <Labelandinput label={"Username:"}>
            </Labelandinput>
            <Labelandinput label={"Password:"}>
            </Labelandinput>
            <StyledButton>
                Login
            </StyledButton>
        </LoginSignupFieldsContainer>
    );
}
