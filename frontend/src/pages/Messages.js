
import {StyledMainPage} from "../style/Style";
import {Navbar} from "../components/navbar/Navbar";
import {MessagesContainer} from "../components/messages/MessagesContainer";
import {Logout} from "../components/logout/Logout";

export const Messages = () => {

    return (
    <StyledMainPage>
        <Navbar activecomponent={"messages"}/>
        <MessagesContainer/>
        <Logout/>
    </StyledMainPage>
    );
}
