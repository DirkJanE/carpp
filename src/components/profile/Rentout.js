import {ColumnContainer, RowContainer, StyledButton, StyledText} from "../../style/Style";
import {Labelandinput} from "../loginandsignup/sub/labelandinput/Labelandinput";
import {useEffect, useState} from "react";
import {Geodatarequest, RDWrequest} from "../apirequest/Apirequest";

export const Rentout = () => {
    const [postalcode, setPostalCode] = useState("");
    const [location, setLocation] = useState();
    const [coordinates, setCoordinates] = useState();

    const [price, setPrice]= useState("");
    const [licensePlate, setLicensePlate]= useState("");
    const [brandType, setBrandType]= useState("");
    const [error, setError] = useState();

    const urlgeodata = `https://geodata.nationaalgeoregister.nl/locatieserver/v3/free?q="${postalcode}" and type:postcode`;
    const urlRDW = `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${licensePlate}`;

    useEffect(() => {
        if (postalcode.length === 6) {
            Geodatarequest(urlgeodata, setCoordinates, setLocation, setError)
        }
    }, [postalcode, urlgeodata, coordinates, location, error]);

    useEffect(() => {
        if (licensePlate.length === 6) {
            RDWrequest(urlRDW, setBrandType, setError);
        }
    }, [urlRDW, licensePlate, error]);

    console.log(brandType)

    return (
        <ColumnContainer>
            <StyledText style={{height: "3vh", width: "76vw", backgroundColor: "#cb6939"}}>
                Jouw instellingen als verhuurder.
            </StyledText>
            <ColumnContainer style={{height: "70vh", width: "76vw", backgroundColor: "#cb6939", borderRadius: 10}}>
                <ColumnContainer style={{alignItems: "flex-start", justifyContent: "flex-start", height: "70vh", width: "72vw", marginTop: "2vh", backgroundColor: "#cb6939", borderRadius: 10}}>
                    <RowContainer>
                        <Labelandinput label={"Jouw postcode:"} flexdirection={"row"} height={"1.5vh"} width={"3vw"} margintop={"1vh"} marginleft={"3vw"} setvalue={setPostalCode}></Labelandinput>
                        <RowContainer style={{marginTop: "0.5vh", marginLeft: "2vw"}}>
                            {location}
                        </RowContainer>
                    </RowContainer>
                    <Labelandinput label={"Jouw verhuurprijs:"} flexdirection={"row"} height={"1.5vh"} width={"3vw"} margintop={"1vh"} marginleft={"2vw"} setvalue={setPrice}></Labelandinput>
                    <RowContainer>
                        <Labelandinput label={"Jouw kenteken:"} flexdirection={"row"} height={"1.5vh"} width={"3vw"} margintop={"1vh"} marginleft={"3vw"} setvalue={setLicensePlate}></Labelandinput>
                        <RowContainer style={{marginTop: "0.5vh", marginLeft: "2vw"}}>
                            {brandType}
                        </RowContainer>
                    </RowContainer>
                </ColumnContainer>
                <RowContainer style={{width: "76vw", justifyContent: "flex-end", marginBottom: "2vh", marginRight: "2.5vw"}}>
                    <StyledButton style={{height: "4vh", width: "4vw"}}>
                        Opslaan
                    </StyledButton>
                </RowContainer>
            </ColumnContainer>
        </ColumnContainer>
    );
}
