import {RowContainer, StyledNavbar, StyledNavbarLinks} from "../../style/Style";
import {Title} from "../title/Title";
import {Car} from "../car/Car";
import car from '../../background/car.png';

export const Navbar = () => {

    return (
      <StyledNavbar>
          <RowContainer style={{width: "2vw"}}></RowContainer>
          <RowContainer style={{width: "28vw", justifyContent: "flex-start"}}>
            <Title fontsize={"1.5vw"} height={"5vh"} color={"black"}></Title>
          </RowContainer>
          <RowContainer style={{width: "60vw"}}>
            <Car image={car} color={"black"}>
            </Car>
          </RowContainer>
          <RowContainer style={{width: "28vw", justifyContent: "flex-end"}}>
              <StyledNavbarLinks href="localhost:3000/maps"
                                 target="_blank"
                                 rel="noopener"
                                 primary>
                Maps
              </StyledNavbarLinks>
              <StyledNavbarLinks  href="localhost:3000/messages"
                                  target="_blank"
                                  rel="noopener"
                                  primary>
                Berichten
              </StyledNavbarLinks>
              <StyledNavbarLinks href="localhost:3000/profile"
                                 target="_blank"
                                 rel="noopener"
                                 primary>
                Profiel
              </StyledNavbarLinks>
          </RowContainer>
          <RowContainer style={{width: "2vw"}}></RowContainer>
      </StyledNavbar>
    );
}
