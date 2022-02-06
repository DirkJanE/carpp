import {ColumnContainer, StyledText} from "../../../style/Style";
import {useEffect, useState} from "react";
import axios from "axios";
import {ImageContainer, StyledImg} from "../style/Bingmapsstyle";

export const PictureContainer = (props) => {
    const token = localStorage.getItem('token');
    const [picture, setPicture] = useState({});


    function handleClick () {
        props.setisbingmaps(true);
    }

    useEffect(() => {
        async function getPicture() {
            try {
                const result = await axios.get(`http://localhost:8080/api/picture/download/${props.pictureid}`,
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        },
                    })
                setPicture(result.data);

            } catch (e) {
                console.error(e);
            }
        }
    getPicture()
    }, );

    return (
        <ImageContainer onClick={handleClick}>
            <StyledImg src={`data:image/jpeg;base64,${picture.docFile}`}/>
            <StyledText>
                Klik op de foto om terug te gaan naar de kaart.
            </StyledText>
        </ImageContainer>
    )
}
