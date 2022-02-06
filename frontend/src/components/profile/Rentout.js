import {ColumnContainer, RowContainer} from "../../style/Style";
import {Profilelabelandinput} from "./profilelabelandinput/Profilelabelandinput";
import {useEffect, useState} from "react";
import {deleteRequest, Geodatarequest, RDWrequest, writeProfile} from "../apirequest/Apirequest";
import {BingMapsContainer} from "../bingmaps/style/Bingmapsstyle";
import {ProfileRowContainer} from "./style/Dropdownstyle";
import {Uploadpicture} from "./uploadpicture/Uploadpicture";
import {TextContainer} from "../text/TextContainer";

export const Rentout = (props) => {
    const token = props.token;
    const searchdistance = "0";
    const searchbrand = "0";
    const searchprize = "0";
    const [postalcode, setPostalCode] = useState("");
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [location, setLocation] = useState();
    const [price, setPrice]= useState("");
    const [licensePlate, setLicensePlate]= useState("");
    const [brandType, setBrandType]= useState("");
    const [result, setResult] = useState();
    const [error, setError] = useState();

    const [number, setNumber] = useState(0);

    const urlgeodata = `https://geodata.nationaalgeoregister.nl/locatieserver/v3/free?q="${postalcode}" and type:postcode`;
    const urlRDW = `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${licensePlate}`;

    useEffect(() => {
        if (postalcode.length === 6) {
            Geodatarequest(urlgeodata, setLocation, setLat, setLon, setError)
        }
    }, [postalcode, urlgeodata, location, lat, lon, error]);

    useEffect(() => {
        if (licensePlate.length === 6 && number === 0) {
            RDWrequest(urlRDW, setBrandType, setError);
            setNumber(1);
        }
    }, [urlRDW, licensePlate, error, number]);

    useEffect(() => {
        console.log(lat, lon, brandType, price)

        if (lat && lon && brandType && price) {
            deleteRequest(props.token, props.userid, setResult);
            if (result === 200) {
                writeProfile(props.token, props.userid, searchdistance, searchbrand, searchprize, lat, lon, brandType, price);
            }
        }

    }, [lat, lon, brandType, price, props, result]);

    /*
    function handleClick() {
        putRequest(props.token, props.userid, searchdistance, searchbrand, searchprize, lat, lon, brandType, price)
    }
*/
    return (
        <ColumnContainer>
            <TextContainer text={"Jouw instellingen als verhuurder."}/>
            <BingMapsContainer style={{flexDirection: "column", alignItems: "center", justifyContent: "center", height: "70vh", marginTop: "0.5vh", backgroundColor: "#cb6939", borderRadius: 10}}>
                <ColumnContainer style={{flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", height: "66vh", width: "72vw"}}>
                    <ProfileRowContainer>
                        <Profilelabelandinput label={"Jouw postcode:"} flexdirection={"row"} height={"1.5vh"} width={"3vw"} margintop={"1vh"} marginleft={"3vw"} setvalue={setPostalCode}></Profilelabelandinput>
                        <RowContainer style={{height: "3vh", marginTop: "0.5vh", marginLeft: "2vw"}}>
                            {location}
                        </RowContainer>
                    </ProfileRowContainer>
                            <Profilelabelandinput label={"Jouw verhuurprijs:"} flexdirection={"row"} height={"1.5vh"} width={"3vw"} margintop={"1vh"} marginleft={"2vw"} setvalue={setPrice}></Profilelabelandinput>
                    <ProfileRowContainer>
                        <Profilelabelandinput label={"Jouw kenteken:"} flexdirection={"row"} height={"1.5vh"} width={"3vw"} margintop={"1vh"} marginleft={"3vw"} setvalue={setLicensePlate}></Profilelabelandinput>
                        <RowContainer style={{height: "3vh", marginTop: "0.5vh", marginLeft: "2vw"}}>
                            {brandType}
                        </RowContainer>
                    </ProfileRowContainer>
                        <Uploadpicture userid={props.userid} token={token}/>
                </ColumnContainer>
            </BingMapsContainer>
        </ColumnContainer>
    );
}
