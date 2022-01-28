import {StyledCar, StyledSmallCar} from "./style/Carstyle.js";

export const Car = (props) => {

    if (props.component === "LoginSignupPage") {
        return (
            <StyledCar src={props.image} style={{justifyContent: "center"}}/>
        );
    } else {
        return (
            <StyledSmallCar src={props.image} style={{justifyContent: "center"}}/>
        );
    }
}
