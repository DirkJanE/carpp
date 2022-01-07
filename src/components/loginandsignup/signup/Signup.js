import {StyledForm, StyledButton, RowContainer} from "../../../style/Style";
import {Labelandinput} from "../sub/labelandinput/Labelandinput";
import { Radiobuttons } from "../sub/radiobuttons/radiobuttons";
import {useState} from "react";
import {Regexcheck} from "../sub/regexcheck/Regexcheck";

export const Signup = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [selection, setSelection] = useState("");

    const handleClick = (event) => {
        event.preventDefault();
        props.setnotclicked(false);

        if (username.length === 0) {
            props.setnousername(true);

        } else if (username.length > 0 && username.length < 4) {
            props.settooshort(true);

        } else {
            props.settooshort(false);
            props.setnousername(false);
        }

        if (password.length === 0) {
            props.setnopassword(true);

        } else if (password.length > 0) {
            props.setnopassword(false);
            const validpassword = Regexcheck(password);

            if (validpassword === true) {
                props.setminreq(true);

            } else {
                props.setminreq(false);
            }

        } else {
            props.setnopassword(true);
            props.setminreq(false);
        }

        if (password !== repeatPassword) {
            props.setnomatch(true);
        } else {
            props.setnomatch(false);
        }

        if (selection.length === 0) {
            props.setnoselection(true);
        } else {
            props.setnoselection(false);
        }
    }

    return (
        <StyledForm style={{flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Labelandinput type={"text"} label={"Choose your username:"} setvalue={setUsername}>
            </Labelandinput>
            <Labelandinput type={"password"} label={"Choose your password:"} setvalue={setPassword}>
            </Labelandinput>
            <Labelandinput type={"password"} label={"Repeat your password:"} setvalue={setRepeatPassword}>
            </Labelandinput>
            <Radiobuttons setvalue={setSelection}>
            </Radiobuttons>
            <StyledButton onClick={handleClick}>
                Sign up
            </StyledButton>
        </StyledForm>
    );
}
