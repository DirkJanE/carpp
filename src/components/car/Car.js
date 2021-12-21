import {StyledCar} from "../../style/Style";

export const Car = (props) => {

    return (
        <StyledCar style={{backgroundImage: `url(${props.image})`, backgroundSize: 95, justifyContent: "center"}}>
        </StyledCar>
    );
}
