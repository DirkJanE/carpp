import {RowContainer, StyledNavbar} from "../../style/Style";
import {Title} from "../title/Title";
import {Car} from "../car/Car";
import carblack from '../../background/carblack.png';
import { useState, useEffect } from "react";
import { Link } from "./link/Link";

export const Navbar = (props) => {
  const names = ["Maps", "Berichten", "Profiel"]
  const [mapsOpacity, setMapsOpacity] = useState();
  const [messageOpacity, setMessageOpacity] = useState();
  const [profileOpcatiy, setProfileOpacity] = useState();

  //console.log(props.activecomponent)

  useEffect(() => {
    if (props.activecomponent === "maps") {
      setMapsOpacity(1);
      setMessageOpacity(0);
      setProfileOpacity(0);

    } else if (props.activecomponent === "messages") {
      setMapsOpacity(0);
      setMessageOpacity(1);
      setProfileOpacity(0);

    } else {
      setMapsOpacity(0);
      setMessageOpacity(0);
      setProfileOpacity(1);
    }
  }, [props.activecomponent]);

  return (
      <StyledNavbar>
          <RowContainer style={{width: "2vw"}}></RowContainer>
          <RowContainer style={{width: "28vw", justifyContent: "flex-start"}}>
            <Title fontsize={"1.5vw"} height={"5vh"} color={"black"}></Title>
          </RowContainer>
          <RowContainer style={{width: "60vw"}}>
            <Car image={carblack} size={"95px"} height={"5vh"} width={"5vw"}>
            </Car>
          </RowContainer>
          <RowContainer style={{width: "28vw", justifyContent: "flex-end"}}>
                    <Link names={names[0]} setcomponent={props.setmaps} opacity={mapsOpacity}/>
                    <Link names={names[1]} setcomponent={props.setmessages} opacity={messageOpacity}/>
                    <Link names={names[2]} setcomponent={props.setprofile} opacity={profileOpcatiy}/>
          </RowContainer>
          <RowContainer style={{width: "2vw"}}></RowContainer>
      </StyledNavbar>
    );
}
