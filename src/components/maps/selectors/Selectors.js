import {RowContainer, StyledLabel, StyledOption, StyledSelector} from "../../../style/Style";

export const Selectors = (props) => {

    return (
        <RowContainer style={{justifyContent: "center", height: "5vh", width: "76vw"}}>
            <StyledLabel style={{marginRight: "1vw"}}>
                {props.label}
            </StyledLabel>
            <StyledSelector>
                {props.options.map(({ option }) => (
                    <StyledOption key={option}> {option} </StyledOption>
                ))}
            </StyledSelector>
        </RowContainer>
    );
}
