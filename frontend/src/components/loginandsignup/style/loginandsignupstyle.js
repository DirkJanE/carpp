import styled from "styled-components";

export const LoginSignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 38vh;
    width: 25vw;
    border-radius: 10px;
    background-color: #F58040;
    box-shadow: 5px 5px #4B2714;
    @media (max-width: 500px) {
        width: 90vw;
        height: 50vh;
    }
`;

export const LoginSignupButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 5.3vh;
    @media (max-width: 500px) {
            
        }
`;

export const StyledInputForRadioButton = styled.input`  
    width: 1vw;
    margin-left: 2.15vw;
    @media (max-width: 500px) {
        height: 2vh;
        width: 10vw;
    }
`;

export const StyledLabelForRadioButton = styled.label`
    @media (max-width: 500px) {
        height: 2vh;
        width: 40vw;
    }
`;
