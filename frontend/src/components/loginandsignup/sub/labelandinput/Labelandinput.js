import {ColumnContainer, StyledInput, StyledLabel} from "../../../../style/Style";
import {useState} from "react";

export const Labelandinput = (props) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
        props.setvalue(event.target.value);
    }

    return (
      <ColumnContainer style={{flexDirection: props.flexdirection, alignItems: "flex-start"}}>
          <StyledLabel style={{marginTop: "1vh"}}>
              {props.label}
          </StyledLabel>
          <StyledInput style={{height: props.height, width: props.width, marginTop: props.margintop, marginLeft: props.marginleft}} type={props.type} value={value} onChange={handleChange} >
          </StyledInput>
      </ColumnContainer>
    );
}
