import {GeneralContainer} from "./style/Midsectionstyle";
import {Bingmaps} from "../components/bingmaps/Bingmaps";
import {Dropdowncontainer} from "../components/bingmaps/dropdown/Dropdowncontainer";
import {StyledMainPage} from "../style/Style";
import {Navbar} from "../components/navbar/Navbar";

export const Maps = () => {
    const labels = ["Zoek op afstand:", "Zoek op prijs:", "Zoek op merk:"]

    return (
    <StyledMainPage>
        <Navbar activecomponent={"maps"}/>
        <GeneralContainer>
          <Dropdowncontainer labels={labels} height={"5vh"} width={"76vw"} margintop={"3vh"}/>
          <Bingmaps/>
        </GeneralContainer>
    </StyledMainPage>
    
    );
}
