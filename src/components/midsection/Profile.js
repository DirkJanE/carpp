import {GeneralContainer} from "./style/Midsectionstyle";
import { useState } from "react/cjs/react.development";
import { Rent } from "../profile/Rent";
import { Rentout } from "../profile/Rentout";

export const Profile = () => {
    const [active, setActive] = useState("rentout");

    return (
        <GeneralContainer>
        {active === "rent" ? <Rent/> : <Rentout/>}    
        </GeneralContainer>
    );
}
