import styled from 'styled-components';

export const ProfileRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
        @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const ProfilePictureContainer = styled.img`
    margin-top: 3vh;
    height: 35vh;
    width: 35vw;
    background-repeat: no-repeat;
        @media (max-width: 500px) {
        height: 30vh;
        width: 60vw;
        margin-left: 6vw;
    }
`;

export const StyledDropdownForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 20vh;
    width: 40vw;
    margin-top: 1vh;
    background-color: #cb6939;
    @media (max-width: 500px) {
        flex-direction: column;
        height: 30vh;
        width: 73vw;
        margin-top: 0vh;
    }
`;

export const StyledDropdownLabel = styled.label`
    width: 12.5vw;
    @media (max-width: 500px) {
        height: 2vh;
        width: 50vw;
        margin-right: 0vw;
    }
`;

export const StyledDropdownInput = styled.input`
    height: 2vh;
    width: 4vw;
    margin-top: 0.8vh;
    border-radius: 5px;
    @media (max-width: 500px) {
        height: 2vh;
        width: 20vw;
        margin-top: 1vh;
    }
`;

export const StyledDropdownOption = styled.option`
`;

export const StyledDropdownSelector = styled.select`
    border-radius: 5px;
    background-color: white;
    width: 7vw;
    @media (max-width: 500px) {
        width: 35vw;
        margin-top: 5vh;
    }
`;


export const StyledProfileDropdownContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1vh;
    @media (max-width: 500px) {
        height: 30vh;
        width: 72vw;
        margin-bottom: 0vh;
    }
`;

export const StyledDropdownButton = styled.button`
    height: 4vh;
    width: 4vw;
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
    height: 7vh;
`;

