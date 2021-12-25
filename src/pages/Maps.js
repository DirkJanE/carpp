import {ColumnContainer, StyledMainPage} from "../style/Style";
import {Navbar} from "../components/navbar/Navbar";
import {Dropdownbar} from "../components/maps/dropdownbar/Dropdownbar";
import Mapcontainer from "../components/maps/mapcontainer/Mapcontainer";

export const Maps = () => {
    return (
      <StyledMainPage>
        <Navbar>
        </Navbar>
        <ColumnContainer style={{justifyContent: "flex-start", backgroundColor: "#F58040", height: "80vh", width: "80vw", borderRadius: 10, marginTop: "6vh", boxShadow: "5px 5px #4B2714"}}>
            <Dropdownbar></Dropdownbar>
            <Mapcontainer></Mapcontainer>
        </ColumnContainer>
      </StyledMainPage>
    );
}
