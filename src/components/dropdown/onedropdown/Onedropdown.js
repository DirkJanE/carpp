import {Dropdowncontainer} from "../Dropdowncontainer";
import {
    StyledDropdownForm,
    StyledDropdownLabel,
    StyledDropdownOption,
    StyledDropdownSelector
} from "../dropdownstyle/dropdownstyle";
import {StyledLabel} from "../../../style/Style";
import {useState} from "react/cjs/react.development";

export const Onedropdown = (props) => {

    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    }

    console.log(props.selectors)

    return (
          <StyledDropdownForm style={{flexDirection: props.flexdirection, justifyContent: props.justifycontent, alignItems: props.alignitems}}>
              <StyledDropdownLabel>{props.labels}
              </StyledDropdownLabel>
              <StyledDropdownSelector value={value} onChange={handleChange}>

              </StyledDropdownSelector>
          </StyledDropdownForm>
    );
}
