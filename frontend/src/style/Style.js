import styled from 'styled-components';

export const StyledMainPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(#101a1a, darkslategray);
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 500px) {
        height: 100vh;
        width: 100vw;
        background-image: linear-gradient(#101a1a, darkslategray);
    }
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const MidSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
    }
`;

export const StyledText = styled.h4`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.5vh;
    width: 10.5vw;
    border-radius: 10px;
        &:hover {
        cursor: pointer;
        }
        @media (max-width: 500px) {
        height: 3.5vh;
        width: 42vw;
        border-radius: 5px;
        }
`;

export const StyledLabel = styled.label`   
    @media (max-width: 500px) {
        height: 2vh;
        width: 80vw;
        margin-bottom: 1vh;
        margin-left: 1vw;
    }
`;


export const StyledInput = styled.input`
    height: 2vh;
    width: 19vw;
    border-radius: 5px;
    @media (max-width: 500px) {
        height: 2vh;
        width: 80vw;
    }
`;

export const StyledButton = styled.button`
    height: 2.5vh;
    width: 19.4vw;
    margin-top: 2vh;
    border-radius: 5px;
    &:hover {
        background-color: darkgray;
        cursor: pointer;
        border-radius: 5px;
    }
    @media (max-width: 500px) {
        height: 3vh;
        width: 82vw;
    }
`;


export const StyledForm = styled.form`
    display: flex;
    flexDirection: row;
    background-color: #cb6939;
    border-radius: 10px;
    height: 30vh;
    width: 21vw;
    @media (max-width: 500px) {
        height: 40vh;
        width: 85vw;
        margin-top: 1vh;
    }
`;
