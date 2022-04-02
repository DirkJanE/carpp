import {GeneralContainer} from "../../pages/style/Midsectionstyle";
import {ColumnContainer} from "../../style/Style";
import {TextContainer} from "../text/TextContainer";
import {MessageTo} from "./sub/MessageTo";
import {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import {SendNewMessage} from "./sub/SendNewMessage";
import {MessageLeft, MessageRight, OneMessage, OneName, StyledDiv} from "./style/StyledMessages";
import ScrollToBottom from 'react-scroll-to-bottom';
import './style/messagebox.css';
import {getMessages} from "../apirequest/Apirequest";

export const MessagesContainer = () => {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    const username = decoded.sub;
    const [messageToUserId, setMessageToUserId] = useState();
    const [messageToUser, setMessageToUser] = useState();
    const [userId, setUserId] = useState();
    const [result, setResult] = useState([]);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        getMessages(messageToUser, trigger, messageToUserId, token, userId, username, setResult);
    }, [messageToUser, trigger, messageToUserId, token, userId, username, setResult]);

    return (
    <GeneralContainer style={{flexDirection: "column"}}>
        <TextContainer text={"Verstuur hier je berichten."}/>
        <ColumnContainer style={{width: "76vw", height: "70vh", justifyContent: "flex-start", backgroundColor: "#cb6939", borderRadius: 10}}>
            <MessageTo setuserid={setUserId} username={username} token={token} setmessagetouserid={setMessageToUserId} setmessagetouser={setMessageToUser}/>
            <StyledDiv style={{width: "73.5vw", height: "53vh", backgroundColor: "#AB5A32", marginTop: "2vh", borderRadius: 10}}>
                <ScrollToBottom className='messagebox'>
                {result.map(({ messageid, contactname, message }) => {
                    if (contactname !== username) {
                        return (
                            <StyledDiv key={messageid}>
                                <MessageLeft>
                                    <ColumnContainer style={{alignItems: "flex-start"}}>
                                        <OneName>
                                            {username} zegt:
                                        </OneName>
                                        <OneMessage>
                                            {message}
                                        </OneMessage>
                                    </ColumnContainer>
                                </MessageLeft>
                            </StyledDiv>
                        )}
                    else {
                        return (
                            <StyledDiv key={messageid}>
                                <MessageRight>
                                    <ColumnContainer style={{alignItems: "flex-end"}}>
                                        <OneName>
                                            {messageToUser} zegt:
                                        </OneName>
                                        <OneMessage>
                                            {message}
                                        </OneMessage>
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
