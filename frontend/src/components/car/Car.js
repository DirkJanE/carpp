import {StyledCar, StyledSmallCar} from "./style/Carstyle.js";

export const Car = (props) => {

    if (props.component === "LoginSignupPage") {
        return (
            <StyledCar style={{backgroundImage: `url(${props.image})`, justifyContent: "center"}}/>
        );
    } else {
        return (
            <StyledSmallCar style={{backgroundImage: `url(${props.image})`, justifyContent: "center"}}/>
        );
    }
}
