import styled from "styled-components";

export const NamesContainer = styled.select`
    display: flex;
    flex-direction: column;
    height: 3vh; 
    width: 10vw;
    background-color: #cb6939;
    margin-left: 2vw;
        @media (max-width: 500px) {
        width: 20vw;
        height: 3vh;
    }
`;

export const StyledOption = styled.option`
`;

export const StyledDiv = styled.div`
`;

export const StyledText = styled.text`
    margin-top: 0.8vh;
`;


export const MessageRight = styled.p`
    text-align: end;
    margin-right: 10px;
    font-size: 17px;
`;

export const MessageLeft = styled.p`
    text-align: start;
    margin-left: 10px;
    font-size: 17px;

`;
