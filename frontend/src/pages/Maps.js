import {GeneralContainer} from "./style/Midsectionstyle";
import {Dropdowncontainer} from "../components/bingmaps/dropdown/Dropdowncontainer";
import {StyledMainPage} from "../style/Style";
import {Navbar} from "../components/navbar/Navbar";
import {BingMaps} from "../components/bingmaps/BingMaps";
import {Logout} from "../components/logout/Logout";
import {RentalObjects} from "../components/bingmaps/RentalObjects";
import {BingMapsContainer, MapsContainer} from "../components/bingmaps/style/Bingmapsstyle";
import {useState} from "react";
import {PictureContainer} from "../components/bingmaps/sub/PictureContainer";

export const Maps = () => {
    const labels = ["Zoek op afstand:", "Zoek op prijs:", "Zoek op merk:"]
    const [isBingMaps, setIsBingMaps] = useState(true);
    const [pictureId, setPictureId] = useState();

    console.log(pictureId);

    return (
    <StyledMainPage>
        <Navbar activecomponent={"maps"}/>
        <MapsContainer>
          <Dropdowncontainer labels={labels} height={"5vh"} width={"76vw"} margintop={"3vh"}/>
          <BingMapsContainer>
              {isBingMaps ? <BingMaps/> : <PictureContainer setisbingmaps={setIsBingMaps} pictureid={pictureId}/>}
            <RentalObjects setpictureid={setPictureId} setisbingmaps={setIsBingMaps}/>
          </BingMapsContainer>
        </MapsContainer>
        <Logout/>
    </StyledMainPage>
    
    );
}
