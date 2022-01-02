import {StyledForm} from "../../../style/Style";
import {Selectors} from "../selectors/Selectors";

export const Dropdownbar = () => {
    const distances = [{option: "0 < 10 km"}, {option: "10 < 25 km"}, {option: "25 < 50 km"}, {option: "50 < 100 km"}, {option: ">= 100 km"}];
    const prizes = [{option: "0 < 50 euro"}, {option: "50 < 100 euro"}, {option: "100 < 200 euro"}, {option: ">= 200 euro"}];
    const brands = [{option: "Volkswagen"}, {option: "Opel"}, {option: "Renault"}, {option: "Peugeot"}, {option: "Mercedes"}]

    return (
          <StyledForm style={{height: "5vh", width: "76vw", marginTop: "3vh"}}>
              <Selectors label="Zoek op afstand:" options={distances}>
              </Selectors>
              <Selectors label="Zoek op huurprijs:" options={prizes}>
              </Selectors>
              <Selectors label="Zoek op merk:" options={brands}>
              </Selectors>
          </StyledForm>
    );
}
