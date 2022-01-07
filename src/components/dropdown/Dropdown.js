import {Labelandselector} from "./labelandselector/Labelandselector";
import {StyledDropdownForm} from "./dropdownstyle/dropdownstyle";

export const Dropdown = (props) => {
    const distances = [{option: "0 < 10 km"}, {option: "10 < 25 km"}, {option: "25 < 50 km"}, {option: "50 < 100 km"}, {option: ">= 100 km"}];
    const prizes = [{option: "0 < 50 euro"}, {option: "50 < 100 euro"}, {option: "100 < 200 euro"}, {option: ">= 200 euro"}];
    const brands = [{option: "Volkswagen"}, {option: "Opel"}, {option: "Renault"}, {option: "Peugeot"}, {option: "Mercedes"}]

    const selectors = [{label: props.labels[0], selectors: distances}, {label: props.labels[1], selectors: prizes}, {label: props.labels[2], selectors: brands}]

    return (
          <StyledDropdownForm>
              {selectors.map(({ label, selectors }) => (
                  <Labelandselector key={label} options={selectors}> {label} </Labelandselector>
              ))}
          </StyledDropdownForm>
    );
}
