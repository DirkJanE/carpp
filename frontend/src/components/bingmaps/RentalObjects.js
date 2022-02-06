import {ObjectsContainer, RentalObjectsButtons, StyledText} from "./style/Bingmapsstyle";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {CarppContext} from "../context/CarppContext";

export const RentalObjects = (props) => {
    const token = localStorage.getItem('token');
    const resultfromcontext = useContext(CarppContext);
    const [usersCars, setUsersCars] = useState([]);

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const result = await axios.get('http://localhost:8080/api/auth/getallusers', {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                })
                console.log(resultfromcontext);
                let tempObject = {id: "", username: "", brandtype: "", rentprice: ""}
                let tempArray = [];
                for (let i = 0; i < result.data.length; i++) {
                    for (let j = 0; j < resultfromcontext.userdata.length; j++) {
                        if (result.data[i][0] === resultfromcontext.userdata[j].profileid) {
                            tempObject = {
                                id: result.data[j][0],
                                username: result.data[j][1],
                                brandtype: resultfromcontext.userdata[j].brandtype,
                                rentprice: resultfromcontext.userdata[j].rentprize,
                            };
                            tempArray.push(tempObject);
                        }
                    }
                }
                setUsersCars(tempArray);

            } catch(e) {
                console.error(e);
            }
        }
        getAllUsers()
    }, [resultfromcontext, token]);

    function handleClick(id) {
        props.setisbingmaps(false);
        props.setpictureid(id);
    }

    return (
        <ObjectsContainer>
            <StyledText>Klik op 1 van onderstaande opties voor een foto van de auto:</StyledText>
            {usersCars.map(({ id, username, brandtype, rentprice}) => (
                <RentalObjectsButtons key={id} onClick={() => handleClick(id)}> {username}, {brandtype}, € {rentprice} </RentalObjectsButtons>
            ))}
        </ObjectsContainer>
    )
}
