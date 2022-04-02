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

export const StyledText = styled.p`
    margin-top: 2.4vh;
`;


export const MessageRight = styled.div`
    text-align: end;
    margin-right: 10px;
    font-size: 17px;
`;

export const MessageLeft = styled.div`
    text-align: start;
    margin-left: 10px;
    font-size: 17px;

`;

export const OneMessage = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0vh;
    margin-bottom: 1vh;
    `;

export const OneName = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;
    margin-bottom: 0.5vh;
    `;
