import React, {createContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const CarppContext = createContext({});

function CarppContextProvider({ children }) {
    const history = useHistory();
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const [result, setResult] = useState({userdata: [{lat: "0", lon: "0", brandtype: "0"}]});

    // MOUNTING EFFECT
    useEffect(() => {
        // haal de JWT op uit Local Storage
        const token = localStorage.getItem('token');

        // als er WEL een token is, haal dan opnieuw de gebruikersdata op
        if (token) {
            const decoded = jwt_decode(token);
            fetchUserData(decoded.sub, token);
        } else {
            // als er GEEN token is doen we niks, en zetten we de status op 'done'
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(JWT) {
        // zet de token in de Local Storage
        localStorage.setItem('token', JWT);
        // decode de token zodat we de ID van de gebruiker hebben en data kunnen ophalen voor de context
        const decoded = jwt_decode(JWT);
        //console.log(decoded);
        // geef de ID, token en redirect-link mee aan de fetchUserData functie (staat hieronder)
        fetchUserData(decoded.sub, JWT, '/maps');
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log('Gebruiker is uitgelogd!');
        //history.push('/');
    }

    // Omdat we deze functie in login- en het mounting-effect gebruiken, staat hij hier gedeclareerd!
    async function fetchUserData(id, token, redirectUrl) {
        try {
            // haal gebruikersdata op met de token en id van de gebruiker
            const result = await axios.get(`http://localhost:8080/api/profile/readrentout`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            })
            // zet de gegevens in de state
            console.log(result)
            if (result.data.length !== 0) {
                setResult(result.data);
            }
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    id: result.data.id,
                },
                status: 'done',
            });

            // als er een redirect URL is meegegeven (bij het mount-effect doen we dit niet) linken we hiernaartoe door
            // als we de history.push in de login-functie zouden zetten, linken we al door voor de gebuiker is opgehaald!
            if (redirectUrl) {
                history.push(redirectUrl);
            }

        } catch (e) {
            console.error(e);
            // ging er iets mis? Plaatsen we geen data in de state
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        userdata: result,
        login: login,
        logout: logout,
    };

    return (
        <CarppContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </CarppContext.Provider>
    );
}

export default CarppContextProvider;
