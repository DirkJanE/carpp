import {StyledForm, StyledButton} from "../../../style/Style";
import {Labelandinput} from "../sub/labelandinput/Labelandinput";
import {useState} from "react";

export const Login = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleClick = (event) => {
        event.preventDefault();
        props.setnotclicked(false);
        console.log(username, password);
    }

    return (
        <StyledForm style={{flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Labelandinput type={"text"} label={"Username:"} setvalue={setUsername}>
            </Labelandinput>
            <Labelandinput type={"password"} label={"Password:"} setvalue={setPassword}>
            </Labelandinput>
            <StyledButton onClick={handleClick} >
                Login
            </StyledButton>
        </StyledForm>
    );
}
