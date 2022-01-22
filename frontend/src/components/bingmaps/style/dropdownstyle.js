import styled from 'styled-components';

export const StyledDropdownForm = styled.form`
    display: flex;
    flexDirection: row;
    justify-content: space-evenly;
    align-items: center;
    height: 5vh;
    width: 76vw;
    border-radius: 10px;
    background-color: #cb6939;
    @media (max-width: 500px) {
        flex-direction: column;
        height: 13vh;
        width: 75vw;
        margin-top: 1vh;
    }
`;

export const StyledDropdownLabel = styled.label`
    width: 12.5vw;
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
    @media (max-width: 500px) {
        width: 25vw;
    }
`;
