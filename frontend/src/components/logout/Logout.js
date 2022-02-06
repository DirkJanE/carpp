import {RowContainer} from "../../style/Style";
import {StyledText} from "./style/Style";
import {useContext} from "react";
import {CarppContext} from "../context/CarppContext";

export const Logout = () => {
    const { logout } = useContext(CarppContext);

    function handleClick() {
        logout();
    }

    return (
        <RowContainer style={{width: "100vw", justifyContent: "flex-end"}}>
            <StyledText onClick={handleClick}>
                Log uit
            </StyledText>
        </RowContainer>
    )
}
