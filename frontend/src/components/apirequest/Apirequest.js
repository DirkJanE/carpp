import axios from "axios";

export const Geodatarequest = (url, setLocation, setLat, setLon) => {
    axios.get(url)
        .then(response => {
            if (response.status === 200) {
                let tempLoc = response.data.response.docs[0].centroide_ll;
                setLat(tempLoc.slice(6, 12));
                setLon(tempLoc.slice(17, 24));
                setLocation(response.data.response.docs[0].straatnaam + ", " + response.data.response.docs[0].woonplaatsnaam);
            }
        })
        .catch(error => {
            console.log(error);
        })
}

export const RDWrequest = (url, setBrandType, setError) => {
    axios.get(url,
        { headers: { 'X-App-Token': ""}})
        .then(response => {
            if (response.status === 200) {
                setBrandType(response.data[0].merk + " " + response.data[0].handelsbenaming);
                //console.log(response);
            }
        })
        .catch(error => {
            setError(error);
        })
}

export async function writeProfile(token, userid, searchdistance, searchbrand, searchprize, lat, lon, brandType, price) {
            try {
                const result = await axios.put(`http://localhost:8080/api/profile/write`,
                    {
                        "searchdistance": searchdistance,
                        "searchbrand": searchbrand,
                        "searchprize": searchprize,
                        "lat": lat,
                        "lon": lon,
                        "brandtype": brandType,
                        "rentprize": price,
                        "user": {"userid": userid}
                    },
                    { headers: {
                        "Authorization": `Bearer ${token}`
                    },
                })
                console.log(result);
            } catch (e) {
                console.error(e);
            }
        }

export async function deleteRequest(token, userid, setResult) {
    try {
        const result = await axios.delete(`http://localhost:8080/api/profile/delete/${userid}`,
            { headers: {
                    "Authorization": `Bearer ${token}`
                },
            })
            setResult(result.status);
    } catch (e) {
        console.error(e);
    }
}

export const uploadPicture = async (id, token, formData) => {
    let req = new XMLHttpRequest();
    try {
        req.open('POST', `http://localhost:8080/api/picture/upload/${id}`, true);
        req.setRequestHeader('Authorization', 'Bearer ' + token);
        req.send(formData);
        console.log(req)
    } catch (err) {

        if (err.response.status) {
            console.log(err)
        }
    }
}

export async function deletePicture(userid, token, setResult) {
    try {
        const result = await axios.delete(`http://localhost:8080/api/picture/delete/${userid}`,
            { headers: {
                    "Authorization": `Bearer ${token}`
                },
            })
        setResult(result.status);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

export async function addMessage(token, messageToUser, message, userid, setResult) {
    try {
        const result = await axios.put(`http://localhost:8080/api/message/add`,
            {
                "contactname": messageToUser,
                "message": message,
                "user": {"userid": userid}
            },
            { headers: {
                    "Authorization": `Bearer ${token}`
                },
            })
            setResult(result);
            console.log(typeof(userid));
        } catch (e) {
            console.error(e);
    }
}
