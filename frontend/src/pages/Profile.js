import {GeneralContainer} from "./style/Midsectionstyle";
import { useState } from "react/cjs/react.development";
import { Rent } from "../components/profile/Rent";
import { Rentout } from "../components/profile/Rentout";
import {Navbar} from "../components/navbar/Navbar";
import {StyledMainPage} from "../style/Style";
import jwt_decode from 'jwt-decode';
import {useEffect} from "react";
import axios from "axios";
import {Logout} from "../components/logout/Logout";

export const Profile = () => {
    const [activeProfile, setActiveProfile] = useState("");
    const [userId, setUserid] = useState(0);
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    const name = decoded.sub;

    useEffect(() => {
        async function getUser() {
            try {
                // haal gebruikersdata op met de token en id van de gebruiker
                const result = await axios.get(`http://localhost:8080/api/auth/getuser/${name}`, {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                        },
                    })
                setActiveProfile(result.data.userprofile);
                setUserid(result.data.userid);
                //console.log(result);
            } catch (e) {
                console.error(e);
            }
        }
        getUser();
        }, [name, token]);

    return (
    <StyledMainPage>
        <Navbar activecomponent={"profile"}/>
        <GeneralContainer>
        {activeProfile === "rent" ? <Rent userid={userId} token={token}/> : <Rentout userid={userId} token={token}/>}
        </GeneralContainer>
        <Logout/>
    </StyledMainPage>
    );
}
