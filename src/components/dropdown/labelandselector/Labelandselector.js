import { useState } from "react";
import {
    StyledDropdownLabel,
    StyledLabelandSelectorContainer,
    StyledDropdownOption,
    StyledDropdownSelector
} from "../dropdownstyle/dropdownstyle";


export const Labelandselector = (props) => {
    const [value, setValue] = useState();

    const handleChange = (event) => {
            setValue(event.target.value);
            console.log(event.target.value);
    }

    return (
        <StyledLabelandSelectorContainer>
            <StyledDropdownLabel>
                {props.children[1]}
            </StyledDropdownLabel>
            <StyledDropdownSelector value={value} onChange={handleChange}>
                {props.options.map(({ option }) => (
                        <StyledDropdownOption key={option}> {option} </StyledDropdownOption>
                ))}
            </StyledDropdownSelector>
        </StyledLabelandSelectorContainer>
    );
}
