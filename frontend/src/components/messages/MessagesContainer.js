import {GeneralContainer} from "../../pages/style/Midsectionstyle";
import {ColumnContainer} from "../../style/Style";
import {TextContainer} from "../text/TextContainer";
import {MessageTo} from "./sub/MessageTo";
import {useEffect, useState} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {SendNewMessage} from "./sub/SendNewMessage";
import {MessageLeft, MessageRight, StyledDiv} from "./style/StyledMessages";
import ScrollToBottom from 'react-scroll-to-bottom';
import './style/messagebox.css';

export const MessagesContainer = () => {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    const username = decoded.sub;
    const [messageToUserId, setMessageToUserId] = useState();
    const [messageToUser, setMessageToUser] = useState();
    const [userId, setUserId] = useState();
    const [messages, setMessages] = useState([]);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        async function getMessages(token) {
            try {
                // haal gebruikersdata op met de token en id van de gebruiker
                const result = await axios.get(`http://localhost:8080/api/message/getmessage/${userId}/${messageToUser}/${messageToUserId}/${username}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                })
                let messagesobject = result.data;
                setMessages(messagesobject);
                //console.log(messagesobject);
            } catch (e) {
                console.error(e);
            }
        }
        getMessages(token);
    }, [messageToUser, trigger, messageToUserId, token, userId, username]);

    return (
    <GeneralContainer style={{flexDirection: "column"}}>
        <TextContainer text={"Verstuur hier je berichten."}/>
        <ColumnContainer style={{width: "76vw", height: "70vh", justifyContent: "flex-start", backgroundColor: "#cb6939", borderRadius: 10}}>
            <MessageTo setuserid={setUserId} username={username} token={token} setmessagetouserid={setMessageToUserId} setmessagetouser={setMessageToUser}/>
            <StyledDiv style={{width: "73.5vw", height: "55vh", backgroundColor: "#AB5A32", marginTop: "2vh", borderRadius: 10}}>
                <ScrollToBottom className='messagebox'>
                {messages.map(({ messageid, contactname, message }) => {
                    if (contactname !== username) {
                        return (
                            <StyledDiv key={messageid}>
                                <MessageLeft>
                                    <ColumnContainer style={{alignItems: "flex-start"}}>
                                        <ColumnContainer>
                                            {username} zegt:
                                        </ColumnContainer>
                                        <ColumnContainer>
                                            {message}
                                        </ColumnContainer>
                                    </ColumnContainer>
                                </MessageLeft>
                            </StyledDiv>
                        )}
                    else {
                        return (
                            <StyledDiv key={messageid}>
                                <MessageRight>
                                    <ColumnContainer style={{alignItems: "flex-end"}}>
                                        <ColumnContainer>
                                            {messageToUser} zegt:
                                        </ColumnContainer>
                                        <ColumnContainer>
                                            {message}
                                        </ColumnContainer>
                                    </ColumnContainer>
                                </MessageRight>
                            </StyledDiv>
                        )}
                    })}
                </ScrollToBottom>
            </StyledDiv>
            <SendNewMessage token={token} messagetouser={messageToUser} userid={userId} settrigger={setTrigger}/>
        </ColumnContainer>
    </GeneralContainer>
    )
}
