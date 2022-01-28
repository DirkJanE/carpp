import {StyledForm, StyledButton} from "../../../style/Style";
import {Labelandinput} from "../sub/labelandinput/Labelandinput";
import { Radiobuttons } from "../sub/radiobuttons/radiobuttons";
import {useEffect, useState} from "react";
import {Regexcheck} from "../sub/regexcheck/Regexcheck";
import axios from "axios";

export const Signup = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [selection, setSelection] = useState("");

    const [error, toggleError] = useState("");
    const [loading, toggleLoading] = useState("");

    const source = axios.CancelToken.source();
    //const history = useHistory();

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
        console.log(props)
        if (props.nousername === false && props.tooshort === false && props.nopassword === false && props.minreq === true && props.nomatch === false && props.noselection === false) {
            console.log("test")
            handleSubmit(event);
        }
    }

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:8080/api/auth/signup', {
                username: username,
                password: password,
                userprofile: selection,
            }, {
                cancelToken: source.token,
            });

            // als alles goed gegaan is, linken we dyoor naar de login-pagina
            //history.push('/signin');
        } catch(error) {
            console.log(error.response);
            toggleError(true);
        }

        toggleLoading(false);
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
