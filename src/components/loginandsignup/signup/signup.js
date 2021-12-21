import {LoginSignupFieldsContainer, StyledButton} from "../../../style/Style";
import {Labelandinput} from "../sub/labelandinput/Labelandinput";

export const Signup = () => {

    return (
        <LoginSignupFieldsContainer>
            <Labelandinput label={"Choose your username:"}>
            </Labelandinput>
            <Labelandinput label={"Choose a password:"}>
            </Labelandinput>
            <Labelandinput label={"Repeat your password:"}>
            </Labelandinput>
            <StyledButton>
                Sign up
            </StyledButton>
        </LoginSignupFieldsContainer>
    );
}
