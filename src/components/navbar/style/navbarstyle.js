import styled from "styled-components";

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
    flex-direction: column;
    justify-content: center;
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
    @media (max-width: 500px) {
        height: 2.5vh;
        width: 30vw;
        font-size: 1.5vh;
    }
`;

export const StyledSVG = styled.svg`

`;

export const StyledLine = styled.line`
    width: 2vw;
    stroke-width: 1;
    stroke: #2b2a2a;
    @media (max-width: 500px) {
        width: 0vw;
        stroke-width: 0;
        stroke: #F58040;

    }
`;
