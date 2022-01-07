import styled from 'styled-components';

export const StyledDropdownForm = styled.form`
    display: flex;
    flexDirection: row;
    justify-content: space-evenly;
    align-items: center;
    height: 5vh;
    width: 76vw;
    margin-top: 3vh;
    background-color: #cb6939;
    border-radius: 10px;
    @media (max-width: 500px) {
        flex-direction: column;
        height: 15vh;
        width: 75vw;
        margin-top: 1vh;
    }
`;

export const StyledLabelandSelectorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 5vh;
    width: 19vw;
    @media (max-width: 500px) {
        align-items: flex-start;
        justify-content: center;
        width: 75vw;
        margin-top: 1vh;
        margin-left: 2vw;
        
    }
`;

export const StyledDropdownLabel = styled.label`
    margin-right: 1vw;
    @media (max-width: 500px) {
        height: 2vh;
        width: 30vw;
        margin-right: 0vw;
    }
`;

export const StyledDropdownOption = styled.option`

`;

export const StyledDropdownSelector = styled.select`
    width: 7vw;
    border-radius: 5px;
    @media (max-width: 500px) {
        width: 25vw;
    }
`;
