import { useState } from "react/cjs/react.development";
import { GeneralContainer, StyledText} from "../../style/Style";
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