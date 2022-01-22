import {ColumnContainer, RowContainer, StyledText} from "../../style/Style";
import {useEffect, useState} from "react";
import {Geodatarequest} from "../apirequest/Apirequest";
import {BingMapsContainer} from "../bingmaps/style/Bingmapsstyle";
import {Dropdowncontainer} from "./profiledropdown/Dropdowncontainer";
import {ProfileRowContainer, StyledDropdownButton} from "./style/Dropdownstyle";
import {Profilelabelandinput} from "./profilelabelandinput/Profilelabelandinput";

export const Rent = () => {
    const [postalcode, setPostalCode] = useState("");
    const [error, setError] = useState();
    const [location, setLocation] = useState();
    const [coordinates, setCoordinates] = useState();
    const url = `https://geodata.nationaalgeoregister.nl/locatieserver/v3/free?q="${postalcode}" and type:postcode`;

    useEffect(() => {
        if (postalcode.length === 6) {
            Geodatarequest(url, setCoordinates, setLocation, setError)
        }
    }, [postalcode, url, coordinates, location, error]);

    console.log(coordinates, location)

    return (
        <ColumnContainer>
            <StyledText style={{height: "3vh", width: "76vw", backgroundColor: "#cb6939"}}>
                Jouw instellingen als huurder.
            </StyledText>
            <BingMapsContainer style={{flexDirection: "column", alignItems: "center", justifyContent: "center", height: "70vh", marginTop: "0.5vh", backgroundColor: "#cb6939", borderRadius: 10}}>
                <ColumnContainer style={{flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", height: "66vh", width: "72vw"}}>
                    <ProfileRowContainer>
                        <Profilelabelandinput label={"Jouw postcode:"} flexdirection={"row"} height={"1.5vh"} width={"3vw"} margintop={"1vh"} marginleft={"3vw"} setvalue={setPostalCode}></Profilelabelandinput>
                        <RowContainer style={{height: "3vh", marginTop: "0.5vh", marginLeft: "2vw"}}>
                            {location}
                        </RowContainer>
                    </ProfileRowContainer>
                        <Dropdowncontainer></Dropdowncontainer>
                    <RowContainer style={{width: "72vw", height: "66vh", alignItems: "flex-end", justifyContent: "flex-end"}}>
                        <StyledDropdownButton>
                            Opslaan
                        </StyledDropdownButton>
                    </RowContainer>
                </ColumnContainer>
            </BingMapsContainer>
        </ColumnContainer>

    );
}
