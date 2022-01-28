import {ColumnContainer, RowContainer} from "../../../../style/Style";
import {StyledInputForRadioButton, StyledLabelForRadioButton} from "../../style/loginandsignupstyle";
import { useState } from "react";

export const Radiobuttons = (props) => {
    const [select, setSelect] = useState();

    const handleChange = event => {
      const value = event.target.value;
      setSelect(value);
      props.setvalue(value);
    };

    return (
        <RowContainer style={{width: "inherit", marginLeft: "2vw", justifyContent: "flex-start", marginTop: "1vh"}}>
            <ColumnContainer style={{alignItems: "flex-start"}}>
                <StyledLabelForRadioButton>
                    Ik wil een auto huren.
                </StyledLabelForRadioButton>
                <StyledLabelForRadioButton>
                    Ik wil een auto verhuren.
                </StyledLabelForRadioButton>
            </ColumnContainer>
            <ColumnContainer>
                <StyledInputForRadioButton    type="radio"
                                              value="rent"
                                              checked={select === "rent"}
                                              onChange={event => handleChange(event)}>
                </StyledInputForRadioButton>
                <StyledInputForRadioButton  type="radio"
                                            value="rentout"
                                            checked={select === "rentout"}
                                            onChange={event => handleChange(event)}>
                </StyledInputForRadioButton>
            </ColumnContainer>
        </RowContainer>
    );
}
