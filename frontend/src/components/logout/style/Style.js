import styled from "styled-components";

export const StyledText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    width: 5vw;
    background-color: #F58040;
    box-shadow: 5px 5px #4B2714;
    border-radius: 10px;
    margin-right: 3vw;
    margin-bottom: 1vw; 
        &:hover {
        cursor: pointer;
        }
        @media (max-width: 500px) {
        height: 3.5vh;
        width: 14vw;
        border-radius: 5px;
        }
`;
