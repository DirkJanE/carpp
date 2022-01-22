import { StyledDropdownLabel, StyledDropdownOption, StyledDropdownSelector } from "../../style/dropdownstyle";
import {useState} from "react/cjs/react.development";
import {RowContainer} from "../../../../style/Style";

export const Onedropdown = (props) => {

    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    }

    //console.log(props)

    return (
          <RowContainer>
              <StyledDropdownLabel style={{marginRight: props.marginright}}>{props.children[1]}</StyledDropdownLabel>
              <StyledDropdownSelector value={value} onChange={handleChange}>
                  {props.selector.map(({ option }) => (
                      <StyledDropdownOption key={option}> {option} </StyledDropdownOption>
                  ))}
              </StyledDropdownSelector>
          </RowContainer>
    );
}
