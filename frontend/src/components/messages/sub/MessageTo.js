import {RowContainer} from "../../../style/Style";
import {NamesContainer, StyledOption, StyledText} from "../style/StyledMessages";
import axios from "axios";
import {useEffect, useState} from "react";

export const MessageTo = (props) => {
    const [names, setNames] = useState([]);
    const [ids, setIds] = useState([]);
    const [value, setValue] = useState();

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const result = await axios.get('http://localhost:8080/api/auth/getallusers', {
                    headers: {
                        "Authorization": `Bearer ${props.token}`,
                    },
                })
                    let nameArray = ["--"];
                    let idArray = ["--"];
                    for (let i = 0; i < result.data.length; i++) {
                        nameArray[i + 1] = result.data[i][1];
                        idArray[i + 1] = result.data[i][0];
                    }
                    setNames(nameArray);
                    setIds(idArray);
                    } catch(e) {
                console.error(e);
            }
        }
    getAllUsers()
    }, [names, props]);

    function handleChange(event) {
        setValue(event.target.value);
        props.setmessagetouser(event.target.value);
        for (let i = 0; i < names.length; i++) {
            if (names[i] === event.target.value) {
                props.setmessagetouserid(ids[i]);
            }
            if (names[i] === props.username) {
                props.setuserid(ids[i]);
            }
        }
    }

    return (
        <RowContainer>
            <StyledText>Stuur een bericht naar:</StyledText>
            <NamesContainer value={value} onChange={handleChange} style={{borderRadius: 10, marginTop: "1vh", backgroundColor: "white"}} rows="10" cols="4" >
                {names.map(( name ) => (
                    <StyledOption key={name} style={{marginTop: "2vh"}}> {name} </StyledOption>
                ))}
            </NamesContainer>
        </RowContainer>
    )
}
