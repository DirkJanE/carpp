import {ColumnContainer, RowContainer, StyledText} from "../../style/Style";
import {Dropdown} from "../dropdown/Dropdown";
import {Labelandinput} from "../loginandsignup/sub/labelandinput/Labelandinput";
import {useEffect, useState} from "react";
import {Geodatarequest} from "../apirequest/Apirequest";

export const Rent = () => {
    const [postalcode, setPostalCode] = useState("");
    const [error, setError] = useState();
    const [location, setLocation] = useState();
    const [coordinates, setCoordinates] = useState();
    const selectorlabels = ["Jouw standaard afstand om op te zoeken:", "Jouw standaard prijs om op te zoeken:", "Jouw standaard merk om op te zoeken:"]
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
            <ColumnContainer style={{alignItems: "flex-start", backgroundColor: "#cb6939", borderRadius: 10}}>
                <ColumnContainer style={{marginLeft: "2vw", marginTop: "2vh"}}>
                    <Labelandinput flexdirection={"row"} width={"4vw"} marginleft={"12vw"} label={"Jouw postcode:"} setvalue={setPostalCode}></Labelandinput>
                    {location}
                    <Dropdown labels={selectorlabels} height={"66vh"} flexdirection={"column"} justifycontent={"flex-start"} alignitems={"flex-start"}>
                    </Dropdown>
                </ColumnContainer>
            </ColumnContainer>
        </ColumnContainer>

    );
}
