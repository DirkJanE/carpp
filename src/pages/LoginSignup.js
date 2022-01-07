import {StyledMainPage, RowContainer, MidSectionContainer} from "../style/Style";
import {LoginSignupButtonsContainer, LoginSignupContainer} from "../components/loginandsignup/style/loginandsignupstyle";
import {Title} from "../components/title/Title";
import {useState} from "react";
import car from '../background/car.png';
import carreverse from '../background/carreverse.png'
import {Login} from "../components/loginandsignup/login/Login";
import {Car} from "../components/car/Car";
import {Signup} from "../components/loginandsignup/signup/Signup";
import {Loginsignupbuttons} from "../components/loginandsignup/sub/loginsignupbuttons/loginsignupbuttons";
import {Signupmessages} from "../components/loginandsignup/sub/messages/Signupmessages";
import {Loginmessages} from "../components/loginandsignup/sub/messages/Loginmessages";


export const LoginSignup = () => {
    const [loginFieldActive, setLoginFieldActive] = useState(true);
    const [signupNotClicked, setSignupNotClicked] = useState(true);
    const [loginNotClicked, setLoginNotClicked] = useState(true);
    const [noUsername, setNoUsername] = useState();
    const [tooShort, setTooShort] = useState();
    const [noPassword, setNoPassword] = useState();
    const [noMatch, setNoMatch] = useState();
    const [minReq, setMinReq] = useState();
    const [noSelection, setNoSelection] = useState();

    const handleClickLoginButton = () => {
        setLoginFieldActive(true);
    }

    const handleClickSignupButton = () => {
        setLoginFieldActive(false);
    }

    return (
    <StyledMainPage>
        <RowContainer style={{height: "33vh"}}>
            <Title component={"LoginSignup"}>
            </Title>
        </RowContainer>
        <MidSectionContainer>
            <Car component={"LoginSignupPage"} image={car}>
            </Car>
                <LoginSignupContainer>
                    <LoginSignupButtonsContainer>
                        <Loginsignupbuttons loginFieldActive={loginFieldActive} handleClickLoginButton={handleClickLoginButton} handleClickSignupButton={handleClickSignupButton}>
                        </Loginsignupbuttons>
                    </LoginSignupButtonsContainer>
                    {loginFieldActive ?
                        <Login setnotclicked={setLoginNotClicked}/>
                        :
                        <Signup setnotclicked={setSignupNotClicked} settooshort={setTooShort} setnousername={setNoUsername} setnopassword={setNoPassword} setnomatch={setNoMatch} setminreq={setMinReq} setnoselection={setNoSelection}/>
                    }
                </LoginSignupContainer>
            <Car component={"LoginSignupPage"} image={carreverse}>
            </Car>
        </MidSectionContainer>
        {loginFieldActive ?
            <Loginmessages notclicked={loginNotClicked}></Loginmessages>
            :
            <Signupmessages notclicked={signupNotClicked} tooshort={tooShort} nousername={noUsername} nopassword={noPassword} nomatch={noMatch} minreq={minReq} noselection={noSelection}></Signupmessages>
        }
    </StyledMainPage>
    );
}
