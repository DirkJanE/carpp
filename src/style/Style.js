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

export const LoginSignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 40vh;
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
        height: 3.5vh;
        width: 90vw;
        }
`;

export const LoginSignupFieldsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
    width: 21vw;
    border-radius: 10px;
    background-color: #cb6939;
`;


export const StyledTitle = styled.div`
    color: #F58040;
    font-size: 10vw;
    @font-face {
        font-family: 'Orbitron', sans-serif;
        src: url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap")
    }
    @media (max-width: 500px) {
        font-size: 50vw;
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
        height: 3.1vh;
        width: 44vw;
        border-radius: 5px;
        }
`;

export const StyledCar = styled.div`
    background-repeat: no-repeat;
    @media (max-width: 500px) {
        background-size: 200px 100px;
        width: 50vw;     
    }
`;

export const StyledLabel = styled.label`
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

export const StyledSelector = styled.select`
    width: 5vw;
    border-radius: 5px;
`;

export const StyledOption = styled.option`

`;

export const StyledForm = styled.form`
    display: flex;
    flexDirection: row;
    height: 5vh;
    width: 76vw;
    margin-top: 2vh;
    background-color: #cb6939;
    border-radius: 10px;
`;

export const StyledNavbar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5vh;
    width: 100vw;
    background-image: linear-gradient(to bottom, rgba(245, 128, 64, 1) 80%, rgba(110, 59, 30, 1));
`;

export const StyledNavbarLinks = styled.a`
    display: flex;
    justify-content: right;
    align-items: center;
    color: black;
    width: 8vw;
    height: 5vh;
    background-color: #F58040;
    text-decoration: none;
    background-image: linear-gradient(to bottom, rgba(245, 128, 64, 1) 80%, rgba(110, 59, 30, 1));
    &:hover {
        cursor: pointer;
    }
`;
