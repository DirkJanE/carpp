import {ColumnContainer, GeneralContainer, StyledMainPage} from "../style/Style";
import {Navbar} from "../components/navbar/Navbar";
import {Dropdownbar} from "../components/maps/dropdownbar/Dropdownbar";
import {Mapcontainer} from "../components/maps/mapcontainer/Mapcontainer";

export const Maps = () => {
    return (
      <StyledMainPage>
        <Navbar>
        </Navbar>
        <GeneralContainer>
            <Dropdownbar></Dropdownbar>
            <Mapcontainer></Mapcontainer>
        </GeneralContainer>
      </StyledMainPage>
    );
}
