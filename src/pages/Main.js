import { useState } from "react";
import {StyledMainPage} from "../style/Style";
import {Navbar} from "../components/navbar/Navbar";
import { Maps } from "../components/midsection/Maps";
import { Messages } from "../components/midsection/Messages";
import { Profile } from "../components/midsection/Profile";

export const Main = () => {
    const [activeComponent, setActiveComponent] = useState("maps");

    const setMaps = () => {
        setActiveComponent("maps")
    }

    const setMessages = () => {
      setActiveComponent("messages")
    }

    const setProfile = () => {
      setActiveComponent("profile")
    }

    return (
        <StyledMainPage>
          <Navbar setmaps={setMaps} setmessages={setMessages} setprofile={setProfile} activecomponent={activeComponent}/>
          {activeComponent === "maps" ? <Maps/> : ""}
          {activeComponent === "messages" ? <Messages/> : ""}
          {activeComponent === "profile" ? <Profile/> : ""}
      </StyledMainPage>
    );
}