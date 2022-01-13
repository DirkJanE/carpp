import {ColumnContainer, StyledInput, StyledLabel} from "../../../style/Style";
import {useState} from "react";
import {StyledDropdownInput, StyledDropdownLabel} from "../style/Dropdownstyle";

export const Profilelabelandinput = (props) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
        props.setvalue(event.target.value);
    }

    return (
        <ColumnContainer style={{flexDirection: props.flexdirection, alignItems: "flex-start"}}>
            <StyledDropdownLabel style={{marginTop: "1vh"}}>
                {props.label}
            </StyledDropdownLabel>
            <StyledDropdownInput type={props.type} value={value} onChange={handleChange} >
            </StyledDropdownInput>
        </ColumnContainer>
    );
}
