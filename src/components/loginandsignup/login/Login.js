import {StyledForm, StyledButton} from "../../../style/Style";
import {Labelandinput} from "../sub/labelandinput/Labelandinput";

export const Login = () => {

    return (
        <StyledForm style={{flexDirection: "column", alignItems: "center", justifyContent: "center", height: "30vh", width: "21vw"}}>
            <Labelandinput label={"Username:"}>
            </Labelandinput>
            <Labelandinput label={"Password:"}>
            </Labelandinput>
            <StyledButton>
                Login
            </StyledButton>
        </StyledForm>
    );
}
