import {StyledDropdownForm} from "../style/dropdownstyle";
import {Onedropdown} from "./onedropdown/Onedropdown";

export const Dropdowncontainer = (props) => {

    const distances = [{option: "0 < 10 km"}, {option: "10 < 25 km"}, {option: "25 < 50 km"}, {option: "50 < 100 km"}, {option: ">= 100 km"}];
    const prizes = [{option: "0 < 50 euro"}, {option: "50 < 100 euro"}, {option: "100 < 200 euro"}, {option: ">= 200 euro"}];
    const brands = [{option: "Volkswagen"}, {option: "Opel"}, {option: "Renault"}, {option: "Peugeot"}, {option: "Mercedes"}];

    const selectors = [{label: props.labels[0], selector: distances},  {label: props.labels[1], selector: prizes}, {label: props.labels[2], selector: brands}]

    return (
            <StyledDropdownForm style={{flexDirection: props.flexdirection, justifyContent: props.justifycontent, alignItems: props.alignitems, marginTop: props.margintop}}>
                {selectors.map(({ label, selector}) => (
                    <Onedropdown  key={label} selector={selector} margintop={props.margintop} marginright={props.marginright}> {label} </Onedropdown>
                ))}
            </StyledDropdownForm>
    );
}
