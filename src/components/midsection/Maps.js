import {GeneralContainer} from "./style/Midsectionstyle";
import {Onedropdown} from "../dropdown/onedropdown/Onedropdown";
import {Bingmaps} from "../bingmaps/Bingmaps";

export const Maps = () => {
    const selectorlabels = ["Zoek op afstand:", "Zoek op prijs:", "Zoek op merk:"]

    return (
    <GeneralContainer>
      <Onedropdown labels={selectorlabels}/>
      <Bingmaps/>
    </GeneralContainer>
    
    );
}
