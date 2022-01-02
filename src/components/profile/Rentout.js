import { ColumnContainer, StyledText} from "../../style/Style";

export const Rentout = () => {
    const distances = [{option: "0 < 10 km"}, {option: "10 < 25 km"}, {option: "25 < 50 km"}, {option: "50 < 100 km"}, {option: ">= 100 km"}];
    const prizes = [{option: "0 < 50 euro"}, {option: "50 < 100 euro"}, {option: "100 < 200 euro"}, {option: ">= 200 euro"}];
    const brands = [{option: "Volkswagen"}, {option: "Opel"}, {option: "Renault"}, {option: "Peugeot"}, {option: "Mercedes"}]

    return (
        <ColumnContainer>
            <StyledText style={{height: "3vh", width: "76vw", backgroundColor: "#cb6939"}}>
                Jouw instellingen als verhuurder.
            </StyledText>
        </ColumnContainer>
    );
}