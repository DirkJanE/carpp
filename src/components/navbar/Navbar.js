import {RowContainer, StyledSmallCar} from "../../style/Style";
import {StyledNavbar} from "./style/navbarstyle";
import {Title} from "../title/Title";
import { useState, useEffect } from "react";
import { Link } from "./link/Link";
import {Car} from "../car/Car";
import carblack from '../../background/carblack.png';

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
            <Title component={"Navbar"}></Title>
          </RowContainer>
          <RowContainer style={{width: "60vw"}}>
            <Car component={"Navbar"} image={carblack}>
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
