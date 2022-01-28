import {GeneralContainer} from "./style/Midsectionstyle";
import { useState } from "react/cjs/react.development";
import { Rent } from "../components/profile/Rent";
import { Rentout } from "../components/profile/Rentout";
import {Navbar} from "../components/navbar/Navbar";
import {StyledMainPage} from "../style/Style";

export const Profile = () => {
    const [active, setActive] = useState("rentout");

    return (
    <StyledMainPage>
        <Navbar activecomponent={"profile"}/>
            <GeneralContainer>
            {active === "rent" ? <Rent/> : <Rentout/>}
            </GeneralContainer>
    </StyledMainPage>
    );
}
