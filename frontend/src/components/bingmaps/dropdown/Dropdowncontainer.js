import {StyledDropdownForm} from "../style/Bingmapsstyle";
import {Onedropdown} from "./onedropdown/Onedropdown";

export const Dropdowncontainer = (props) => {

    const distances = [{option: "0 < 10 km"}, {option: "10 < 25 km"}, {option: "25 < 50 km"}, {option: "50 < 100 km"}, {option: ">= 100 km"}];
    const prizes = [{option: "0 < 50 euro"}, {option: "50 < 100 euro"}, {option: "100 < 200 euro"}, {option: ">= 200 euro"}];
    const brands = [{option: "Volkswagen"}, {option: "Toyota"}, {option: "Kia"}, {option: "Peugeot"}, {option: "Renault"}, {option: "Hyundai"},
                    {option: "BMW"}, {option: "Skoda"}, {option: "Audi"}, {option: "Ford"}, {option: "Opel"}, {option: "Volvo"}, {option: "Mercedes-Benz"},
                    {option: "Citroen"}, {option: "Mini"}, {option: "Suzuki"}, {option: "Mazda"}, {option: "Seat"}, {option: "Dacia"}, {option: "Nissan"},
                    {option: "Porsche"}, {option: "Mitsubishi"}, {option: "Fiat"}, {option: "Land Rover"}, {option: "Jeep"}, {option: "Honda"}, {option: "Lexus"},
                    {option: "MG"}, {option: "Bentley"}, {option: "Jaguar"}, {option: "Subaru"}, {option: "Smart"}, {option: "Polestar"}, {option: "Alfa Romeo"},
                    {option: "Tesla"}, {option: "Cupra"}, {option: "Ferrari"}
    ];

    const selectors = [{label: props.labels[0], selector: distances},  {label: props.labels[1], selector: prizes}, {label: props.labels[2], selector: brands}]

    return (
            <StyledDropdownForm style={{flexDirection: props.flexdirection, justifyContent: props.justifycontent, alignItems: props.alignitems, marginTop: props.margintop}}>
                {selectors.map(({ label, selector}) => (
                    <Onedropdown  key={label} selector={selector} margintop={props.margintop} marginright={props.marginright}> {label} </Onedropdown>
                ))}
            </StyledDropdownForm>
    );
}
