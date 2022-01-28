import styled from "styled-components";

export const StyledCar = styled.img`
    height: 20vh;
    width: 22vw;
    @media (max-width: 500px) {
        width: 70vw;     
    }
`;

export const StyledSmallCar = styled.img`
    height: 5vh;
    width: 5vw;
    @media (max-width: 500px) {
        height: 5vh;
        width: 14vw; 
    }
`;
