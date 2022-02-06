import styled from 'styled-components';

export const BingMapsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 67vh;
    width: 76vw; 
    background-color: #cb6939;
    border-radius: 10px;
    margin-top: 2vh;
    @media (max-width: 500px) {
        height: 60vh;
    }
`;

export const StyledText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    width: 13vw;
    margin-bottom: 1vw; 
        &:hover {
        cursor: pointer;
        }
        @media (max-width: 500px) {
        height: 3.5vh;
        width: 20vw;
        border-radius: 5px;
        margin-top: 6vh;
        margin-left: 3vw;
        margin-bottom: 6vh;
        }
`;

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

export const StyledImg = styled.img`
    height: 50vh;
    width: auto;
        @media (max-width: 500px) {
        height: 30vh;
        width: 30vw;
    }
`;

export const ObjectsContainer = styled.div`
    flex: display;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 15vw;
    height: 63vh;
    margin-left: 2vh;
    background-color: #AB5A32;
    @media (max-width: 500px) {
        height: 58vh;
        width: 30vw;
    }
`;

export const MapsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #F58040;
    height: 80vh;
    width: 80vw;
    border-radius: 10px;
    margin-top: 6vh;
    box-shadow: 5px 5px #4B2714;
        @media (max-width: 500px) {
        height: 80vh;
        width: 80vw;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 63vh;
    width: 58vw;
    `;

export const RentalObjectsButtons = styled.button`
    height: 2.5vh;
    width: 14vw;
    margin-left: 0.5vw;
    margin-top: 0.5vh;
    border-radius: 5px;
    &:hover {
        background-color: darkgray;
        cursor: pointer;
        border-radius: 5px;
    }
    @media (max-width: 500px) {
        margin-left: 3vw;
        height: 8vh;
        width: 20vw;
}
`;
