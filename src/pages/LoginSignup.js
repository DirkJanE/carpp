import {
    StyledMainPage,
    RowContainer,
    StyledText,
    MidSectionContainer, LoginSignupContainer, LoginSignupButtonsContainer, StyledBottomShadow
} from "../style/Style";
import {Title} from "../components/title/Title";
import {useState} from "react";
import car from '../background/car.png';
import carreverse from '../background/carreverse.png'
import {Login} from "../components/loginandsignup/login/Login";
import {Car} from "../components/car/Car";
import {Signup} from "../components/loginandsignup/signup/signup";
import {Loginsignupbuttons} from "../components/loginandsignup/sub/loginsignupbuttons/loginsignupbuttons";

export const LoginSignup = () => {
    const [loginFieldActive, setLoginFieldActive] = useState(true);

    const handleClickLoginButton = () => {
        setLoginFieldActive(true);
    }

    const handleClickSignupButton = () => {
        setLoginFieldActive(false);
    }

    return (
    <StyledMainPage>
        <RowContainer style={{height: "33vh", alignItems: "flex-start"}}>
            <Title>
            </Title>
        </RowContainer>
        <MidSectionContainer>
            <Car image={car}>
            </Car>
                <LoginSignupContainer>
                    <LoginSignupButtonsContainer>
                        <Loginsignupbuttons loginFieldActive={loginFieldActive} handleClickLoginButton={handleClickLoginButton} handleClickSignupButton={handleClickSignupButton}>
                        </Loginsignupbuttons>
                    </LoginSignupButtonsContainer>
                    {loginFieldActive ? <Login/> : <Signup/>}
                </LoginSignupContainer>
            <Car image={carreverse}>
            </Car>
        </MidSectionContainer>
    </StyledMainPage>
    );
}
