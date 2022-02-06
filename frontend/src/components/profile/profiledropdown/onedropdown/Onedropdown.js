import {StyledDropdownLabel, StyledDropdownOption, StyledDropdownSelector, StyledProfileDropdownContainer} from "../../style/Dropdownstyle";
import {useEffect, useState} from "react";

export const Onedropdown = (props) => {
    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
        //console.log(event.target.value);
    }

    useEffect(() => {
        if (props.children[1] === "Jouw standaard afstand om te zoeken") {
            props.setsearchdistance(value);
        }
        else if (props.children[1] === "Jouw standaard merk om te zoeken") {
            props.setsearchbrand(value);
        } else {
            props.setsearchprize(value);
        }
    }, [value, props]);

    return (
            <StyledProfileDropdownContainer>
                <StyledDropdownLabel>{props.children[1]}:</StyledDropdownLabel>
                <StyledDropdownSelector value={value} onChange={handleChange}>
                    {props.selector.map(({ option }) => (
                        <StyledDropdownOption key={option}> {option} </StyledDropdownOption>
                    ))}
                </StyledDropdownSelector>
            </StyledProfileDropdownContainer>
    )
}
