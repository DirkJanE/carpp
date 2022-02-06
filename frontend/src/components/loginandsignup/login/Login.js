import {StyledForm, StyledButton} from "../../../style/Style";
import {Labelandinput} from "../sub/labelandinput/Labelandinput";
import { CarppContext } from '../../context/CarppContext';
import {useContext, useEffect, useState} from "react";
import axios from "axios";

export const Login = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const source = axios.CancelToken.source();
    const { login } = useContext(CarppContext);

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, );

    useEffect(() => {
        props.setnotclicked(false);
    }, );

    const handleClick = async (event) => {
        event.preventDefault();

        try {
            const result = await axios.post('http://localhost:8080/api/auth/signin', {
                username: username,
                password: password,
            }, {
                cancelToken: source.token,
            });
            //console.log(result.data);
            login(result.data.accessToken);

        } catch(e) {
            console.error(e);
        }
    }

    return (
        <StyledForm style={{flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Labelandinput type={"text"} label={"Gebruikersnaam:"} setvalue={setUsername}>
            </Labelandinput>
            <Labelandinput type={"password"} label={"Wachtwoord:"} setvalue={setPassword}>
            </Labelandinput>
            <StyledButton onClick={handleClick} >
                Login
            </StyledButton>
        </StyledForm>
    );
}
