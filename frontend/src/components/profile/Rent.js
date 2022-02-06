import {ColumnContainer, RowContainer} from "../../style/Style";
import {useEffect, useState} from "react";
import {Geodatarequest} from "../apirequest/Apirequest";
import {BingMapsContainer} from "../bingmaps/style/Bingmapsstyle";
import {Dropdowncontainer} from "./profiledropdown/Dropdowncontainer";
import {ProfileRowContainer} from "./style/Dropdownstyle";
import {Profilelabelandinput} from "./profilelabelandinput/Profilelabelandinput";
import {TextContainer} from "../text/TextContainer";

export const Rent = (props) => {
    const userid = props.userid;
    const token = props.token;
    const [postalcode, setPostalCode] = useState("");
    const [location, setLocation] = useState();
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const url = `https://geodata.nationaalgeoregister.nl/locatieserver/v3/free?q="${postalcode}" and type:postcode`;

    useEffect(() => {
        if (postalcode.length === 6) {
            Geodatarequest(url, setLocation, setLat, setLon)
        }
    }, [url, location, lat, lon, postalcode]);

    return (
        <ColumnContainer>
            <TextContainer text={"Jouw instellingen als huurder."}/>
            <BingMapsContainer style={{flexDirection: "column", alignItems: "center", justifyContent: "center", height: "70vh", marginTop: "0.5vh", backgroundColor: "#cb6939", borderRadius: 10}}>
                <ColumnContainer style={{flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", height: "66vh", width: "72vw"}}>
                    <ProfileRowContainer>
                        <Profilelabelandinput label={"Jouw postcode:"} flexdirection={"row"} height={"1.5vh"} width={"3vw"} margintop={"1vh"} marginleft={"3vw"} setvalue={setPostalCode}></Profilelabelandinput>
                        <RowContainer style={{height: "3vh", marginTop: "0.5vh", marginLeft: "2vw"}}>
                            {location}
                        </RowContainer>
                    </ProfileRowContainer>
                        <Dropdowncontainer userid={userid} token={token} lat={lat} lon={lon}/>
                </ColumnContainer>
            </BingMapsContainer>
        </ColumnContainer>

    );
}
