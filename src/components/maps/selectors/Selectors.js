import { useState } from "react";
import {RowContainer, StyledLabel, StyledOption, StyledSelector} from "../../../style/Style";

export const Selectors = (props) => {
    const [value, setValue] = useState();

    console.log(value)

    return (
        <RowContainer style={{justifyContent: "center", height: "5vh", width: "76vw"}}>
            <StyledLabel style={{marginRight: "1vw"}}>
                {props.label}
            </StyledLabel>
            <StyledSelector value={value} onSelect={setValue}>
                {props.options.map(({ option }) => (
                    <StyledOption key={option} value={option}> {option} </StyledOption>
                ))}
            </StyledSelector>
        </RowContainer>
    );
}
