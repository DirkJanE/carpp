import { useState } from "react";
import {
    StyledDropdownLabel,
    StyledLabelandSelectorContainer,
    StyledDropdownOption,
    StyledDropdownSelector, StyledDropdownForm
} from "./dropdownstyle/dropdownstyle";
import {ColumnContainer, RowContainer} from "../../style/Style";
import {Onedropdown} from "./onedropdown/Onedropdown";

export const Dropdowncontainer = () => {

    const distances = [{option: "0 < 10 km"}, {option: "10 < 25 km"}, {option: "25 < 50 km"}, {option: "50 < 100 km"}, {option: ">= 100 km"}];
    const prizes = [{option: "0 < 50 euro"}, {option: "50 < 100 euro"}, {option: "100 < 200 euro"}, {option: ">= 200 euro"}];
    const brands = [{option: "Volkswagen"}, {option: "Opel"}, {option: "Renault"}, {option: "Peugeot"}, {option: "Mercedes"}];


    const labels = [{label: "Jouw standaard afstand om op te zoeken:"}, {label: "Jouw standaard prijs om op te zoeken:"}, {label: "Jouw standaard merk om op te zoeken:"}]

    const selectors = [{selector: distances},  {selector: prizes}, {selector: brands}]


    return (
        <StyledDropdownForm>
            {labels.map(({ label}) => (
                <Onedropdown  key={label} selectors={selectors}> {label} </Onedropdown>
            ))}
        </StyledDropdownForm>
    );
}
