import {StyledForm, StyledButton} from "../../../style/Style";
import {Labelandinput} from "../sub/labelandinput/Labelandinput";
import { Radiobuttons } from "../sub/radiobuttons/radiobuttons";

export const Signup = () => {

    return (
        <StyledForm style={{flexDirection: "column", alignItems: "center", justifyContent: "center", height: "30vh", width: "21vw"}}>
            <Labelandinput label={"Choose your username:"}>
            </Labelandinput>
            <Labelandinput label={"Choose a password:"}>
            </Labelandinput>
            <Labelandinput label={"Repeat your password:"}>
            </Labelandinput>
            <Radiobuttons>
            </Radiobuttons>
            <StyledButton>
                Sign up
            </StyledButton>
        </StyledForm>
    );
}
