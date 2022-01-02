import { GeneralContainer, RowContainer, ColumnContainer, StyledMessage } from "../../style/Style";

export const Messages = () => {
    const Messages = [
                        [{message: "Hallo Dirk"}, {message: "Ik wil graag je auto huren"}, {message: "Hoeveel kost dat per dag?"}],
                        [{message: "Hallo Jan"}, {message: "Oke"}, {message: "Dat is 50 euro"}],
                    
                    ]


    return (
        <GeneralContainer style={{flexDirection: "row"}}>
            <RowContainer style={{height: "74vh", width: "10vw", backgroundColor: "#cb6939", borderRadius: 10, marginLeft: "2vw"}}>
                
            </RowContainer>
            <ColumnContainer style={{height: "74vh", width: "64vw", backgroundColor: "#cb6939", borderRadius: 10, marginLeft: "2vw"}}>
            {Messages[0].map(({ message }) => (
                    <StyledMessage key={message}> {message} </StyledMessage>
                ))}
            </ColumnContainer>

        </GeneralContainer>
    );
}