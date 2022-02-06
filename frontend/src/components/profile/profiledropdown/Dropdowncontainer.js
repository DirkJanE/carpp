import {Onedropdown} from "./onedropdown/Onedropdown";
import {StyledDropdownForm} from "../style/Dropdownstyle";
import {useEffect, useState} from "react";
import {deleteRequest, writeProfile} from "../../apirequest/Apirequest";

export const Dropdowncontainer = (props) => {
    const brandType = "";
    const price = "0"
    const lat = props.lat;
    const lon = props.lon;

    const [result, setResult] = useState();

    const [searchPrize, setSearchPrize] = useState();
    const [searchBrandType, setSearchBrandType] = useState();
    const [searchDistance, setSearchDistance] = useState();

    const distances = [{option: "0 < 10 km"}, {option: "10 < 25 km"}, {option: "25 < 50 km"}, {option: "50 < 100 km"}, {option: ">= 100 km"}];
    const prizes = [{option: "0 < 50 euro"}, {option: "50 < 100 euro"}, {option: "100 < 200 euro"}, {option: ">= 200 euro"}];
    const brands = [{option: "Volkswagen"}, {option: "Opel"}, {option: "Renault"}, {option: "Peugeot"}, {option: "Mercedes"}];

    const selectors = [{label: "Jouw standaard afstand om te zoeken", selector: distances},  {label: "Jouw standaard prijs om te zoeken", selector: prizes}, {label: "Jouw standaard merk om te zoeken", selector: brands}]

    useEffect(() => {
        //console.log(lat, lon, searchBrandType, searchPrize, searchDistance)

        if (lat && lon && searchBrandType && searchPrize && searchDistance) {
            deleteRequest(props.token, props.userid, setResult);
            if (result === 200) {
                writeProfile(props.token, props.userid, searchDistance, searchBrandType, searchPrize, lat, lon, brandType, price);
            }
        }

    }, [lat, lon, searchBrandType, searchPrize, searchDistance, result, props]);

    return (
    <StyledDropdownForm>
        {selectors.map(({ label, selector}) => (
                <Onedropdown  key={label} selector={selector} setsearchprize={setSearchPrize} setsearchbrand={setSearchBrandType} setsearchdistance={setSearchDistance}> {label}</Onedropdown>
            ))}
    </StyledDropdownForm>

    )
}
