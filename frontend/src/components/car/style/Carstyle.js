import styled from "styled-components";

export const StyledCar = styled.div`
    height: 17vh;
    width: 22vw;
    background-size: 400px; 
    background-repeat: no-repeat;
    @media (max-width: 500px) {
        background-size: 200px;
        width: 50vw;     
    }
`;

export const StyledSmallCar = styled.div`
    height: 5vh;
    width: 8vw;
    background-size: 100px;
    background-repeat: no-repeat;
    @media (max-width: 500px) {
        height: 5vh;
        width: 15vw; 
        background-size: 60px; 
    }
`;
