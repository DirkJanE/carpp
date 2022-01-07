import {GeneralContainer} from "./style/Midsectionstyle";
import {Dropdown} from "../dropdown/Dropdown";
import {Bingmaps} from "../bingmaps/Bingmaps";

export const Maps = () => {
    const selectorlabels = ["Zoek op afstand:", "Zoek op prijs:", "Zoek op merk:"]

    return (
    <GeneralContainer>
      <Dropdown labels={selectorlabels}/>
      <Bingmaps/>
    </GeneralContainer>
    
    );
}
