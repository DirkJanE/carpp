import {ColumnContainer, StyledInput, StyledLabel} from "../../../../style/Style";

export const Labelandinput = (props) => {

    return (
      <ColumnContainer style={{alignItems: "flex-start"}}>
          <StyledLabel style={{marginTop: "1vh"}}>
              {props.label}
          </StyledLabel>
          <StyledInput>
          </StyledInput>
      </ColumnContainer>
    );
}
