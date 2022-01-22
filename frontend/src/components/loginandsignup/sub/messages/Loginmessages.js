
import {useEffect, useState} from "react";
import {LoginSignupContainer} from "../../style/loginandsignupstyle";

export const Loginmessages = (props) => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        if (props.notclicked === true) {
            setOpacity(0);

        } else {
            setOpacity(1);
        }
    }, [props]);

    return (
        <LoginSignupContainer style={{height: "11.5vh", marginTop: "2vh", opacity: opacity}}>
            Foute login.
        </LoginSignupContainer>
    )
}
