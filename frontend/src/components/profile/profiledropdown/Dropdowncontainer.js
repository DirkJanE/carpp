import {Onedropdown} from "./onedropdown/Onedropdown";
import {StyledDropdownForm} from "../style/Dropdownstyle";

export const Dropdowncontainer = () => {
    const distances = [{option: "0 < 10 km"}, {option: "10 < 25 km"}, {option: "25 < 50 km"}, {option: "50 < 100 km"}, {option: ">= 100 km"}];
    const prizes = [{option: "0 < 50 euro"}, {option: "50 < 100 euro"}, {option: "100 < 200 euro"}, {option: ">= 200 euro"}];
    const brands = [{option: "Volkswagen"}, {option: "Opel"}, {option: "Renault"}, {option: "Peugeot"}, {option: "Mercedes"}];

    const selectors = [{label: "Jouw standaard afstand om te zoeken", selector: distances},  {label: "Jouw standaard prijs om te zoeken", selector: prizes}, {label: "Jouw standaard merk om te zoeken", selector: brands}]

    return (
    <StyledDropdownForm>
        {selectors.map(({ label, selector}) => (
                <Onedropdown  key={label} selector={selector}> {label} </Onedropdown>
            ))}
    </StyledDropdownForm>

    )
}
