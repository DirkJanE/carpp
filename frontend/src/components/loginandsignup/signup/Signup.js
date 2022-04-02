import {StyledForm, StyledButton} from "../../../style/Style";
import {Labelandinput} from "../sub/labelandinput/Labelandinput";
import { Radiobuttons } from "../sub/radiobuttons/radiobuttons";
import {useEffect, useState} from "react";
import {CheckSignup} from "../functions/Check"
import axios from "axios";

export const Signup = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [selection, setSelection] = useState("");

    const source = axios.CancelToken.source();

    useEffect(() => {
        CheckSignup(username, password, repeatPassword, selection, props);
    }, [username, password, repeatPassword, selection, props]);

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, );

    async function handleClick(e) {
        e.preventDefault();

        try {
            const result = await axios.post('http://localhost:8080/api/auth/signup', {
                username: username,
                password: password,
                userprofile: selection,
            }, {
                cancelToken: source.token,
            });
            if (result.data.message === "User registered successfully!") {
                props.loginactive();
            }

        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <StyledForm style={{flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Labelandinput type={"text"} label={"Kies een gebruikersnaam:"} setvalue={setUsername}>
            </Labelandinput>
            <Labelandinput type={"password"} label={"Kies een wachtwoord:"} setvalue={setPassword}>
            </Labelandinput>
            <Labelandinput type={"password"} label={"Herhaal je wachtwoord:"} setvalue={setRepeatPassword}>
            </Labelandinput>
            <Radiobuttons setvalue={setSelection}>
            </Radiobuttons>
            <StyledButton onClick={handleClick}>
                Sign up
            </StyledButton>
        </StyledForm>
    );
}
