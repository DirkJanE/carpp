import {RowContainer, StyledButton} from "../../../style/Style";
import {NewMessage} from "./NewMessage";
import {addMessage} from "../../apirequest/Apirequest";
import {useState} from "react";

export const SendNewMessage = (props) => {
    const [setResult] = useState();
    const [message, setMessage] = useState();

    //console.log(message);

    function handleClick() {
        addMessage(props.token, props.messagetouser, message, props.userid, setResult);
        setMessage("")
        props.settrigger(true);
    }

    return (
        <RowContainer>
            <NewMessage message={message} setmessage={setMessage} settrigger={props.settrigger}/>
            <StyledButton style={{height: "4.5vh", width: "13.5vw", marginTop: "2.3vh", marginLeft: "1vw"}} onClick={handleClick}>
                Verzend
            </StyledButton>
        </RowContainer>
    )
}
