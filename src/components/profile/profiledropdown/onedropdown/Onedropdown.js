import {
    StyledDropdownForm,
    StyledDropdownLabel,
    StyledDropdownOption,
    StyledDropdownSelector, StyledOnedropdownContainer, StyledProfileDropdownContainer, TestContainer
} from "../../style/Dropdownstyle";
import {RowContainer} from "../../../../style/Style";
import {useState} from "react";

export const Onedropdown = (props) => {
    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    }

    console.log(props)

    return (
            <StyledProfileDropdownContainer>
                <StyledDropdownLabel>Jouw standaard afstand om te zoeken:</StyledDropdownLabel>
                <StyledDropdownSelector value={value} onChange={handleChange}>
                    {props.selector.map(({ option }) => (
                        <StyledDropdownOption key={option}> {option} </StyledDropdownOption>
                    ))}
                </StyledDropdownSelector>
            </StyledProfileDropdownContainer>
    )
}
