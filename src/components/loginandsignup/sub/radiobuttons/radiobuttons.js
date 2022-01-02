import { RowContainer, StyledForm, StyledInput, StyledLabel } from "../../../../style/Style";
import { useState } from "react";

export const Radiobuttons = () => {
    const [select, setSelect] = useState("optionA");

    const handleSelectChange = event => {
      const value = event.target.value;
      setSelect(value);
      //console.log(value)
    };

    return (
        <StyledForm style={{flexDirection: "column", width: "19vw", alignItems: "flex-start", marginTop: "1vh"}}>
            <RowContainer>
                <StyledLabel for="rent" >
                    Ik wil een auto huren.
                </StyledLabel>
                <StyledInput    type="radio" 
                                name="rentorlet"   
                                id="rent"
                                value="optionA"
                                checked={select === "optionA"}
                                onChange={event => handleSelectChange(event)}
                                style={{width: "1vw", marginLeft: "2.1vw"}}
                                >
                </StyledInput>
            </RowContainer>
            <RowContainer>
                <StyledLabel for="let">
                    Ik wil een auto verhuren.
                </StyledLabel>
                <StyledInput    type="radio" 
                                name="rentorlet"
                                id="let" 
                                value="optionB"
                                checked={select === "optionB"}
                                onChange={event => handleSelectChange(event)}
                                style={{width: "1vw", marginLeft: "1vw"}}>
                </StyledInput>
            </RowContainer>
        </StyledForm>

    );
}