import {StyledInput} from "../../../style/Style";

export const NewMessage = (props) => {

    function handleChange(event) {
        props.setmessage(event.target.value);
        props.settrigger(false);
    }

    return (
        <StyledInput value={props.message} onChange={handleChange} style={{width: "58.5vw", height: "4vh", marginTop: "2vh"}}></StyledInput>
    )
}
