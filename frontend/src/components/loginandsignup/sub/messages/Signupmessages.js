import {RowContainer} from "../../../../style/Style";
import {LoginSignupContainer} from "../../style/loginandsignupstyle";
import {useEffect, useState} from "react";

export const Signupmessages = (props) => {
    const [opacity, setOpacity] = useState(0);
    const nousername = "Vul een username in."
    const tooshort = "Username is tekort."
    const nopassword = "Vul een password in."
    const nomatch = "Passwords komen niet overeen."
    const minreq = "Password voldoet niet aan minimale vereisten."
    const noselection = "Selecteer huren of verhuren."

    useEffect(() => {
        if (props.notclicked === true) {
            setOpacity(0);

        } else {
            if (props.nousername === false && props.tooshort === false && props.nopassword === false && props.nomatch === false && props.minreq === true && props.noselection === false) {
                setOpacity(0);

            } else {
                setOpacity(1);

            }
        }
    }, [props]);

    return (
        <LoginSignupContainer style={{height: "11.5vh", marginTop: "2vh", opacity: opacity}}>
            {props.nousername ? <RowContainer> {nousername} </RowContainer> : ""}
            {props.tooshort ? <RowContainer> {tooshort} </RowContainer> : ""}
            {props.nopassword ? <RowContainer> {nopassword} </RowContainer> : ""}
            {props.nomatch ? <RowContainer> {nomatch} </RowContainer> : ""}
            {props.minreq ? "" : <RowContainer> {minreq} </RowContainer>}
            {props.noselection ? <RowContainer> {noselection} </RowContainer> : ""}
        </LoginSignupContainer>
    )
}
