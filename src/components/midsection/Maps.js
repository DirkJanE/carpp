import {GeneralContainer} from "./style/Midsectionstyle";
import {Onedropdown} from "../bingmaps/dropdown/onedropdown/Onedropdown";
import {Bingmaps} from "../bingmaps/Bingmaps";
import {Dropdowncontainer} from "../bingmaps/dropdown/Dropdowncontainer";

export const Maps = () => {
    const labels = ["Zoek op afstand:", "Zoek op prijs:", "Zoek op merk:"]

    return (
    <GeneralContainer>
      <Dropdowncontainer labels={labels} height={"5vh"} width={"76vw"} margintop={"3vh"}/>
      <Bingmaps/>
    </GeneralContainer>
    
    );
}
