import {StyledCar} from "../../style/Style";

export const Car = (props) => {

    return (
        <StyledCar style={{backgroundImage: `url(${props.image})`, height: props.height, width: props.width, backgroundSize: props.size, justifyContent: "center"}}>
        </StyledCar>
    );
}
