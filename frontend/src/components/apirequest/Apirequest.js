import axios from "axios";

export const Geodatarequest = (url, setCoordinates, setLocation, setError) => {
    axios.get(url)
        .then(response => {
            if (response.status === 200) {
                setCoordinates(response.data.response.docs[0].centroide_ll);
                setLocation(response.data.response.docs[0].straatnaam + ", " + response.data.response.docs[0].woonplaatsnaam);
            }
        })
        .catch(error => {
            setError(error);
        })
}

export const RDWrequest = (url, setBrandType, setError) => {
    axios.get(url,
        { headers: { 'X-App-Token': ""}})
        .then(response => {
            if (response.status === 200) {
                setBrandType(response.data[0].merk + " " + response.data[0].handelsbenaming);
                console.log(response);
            }
        })
        .catch(error => {
            setError(error);
        })
}

/*
export const getScoreForAuth = async (setIsLoggedIn) => {
    const id = JSON.parse(localStorage.getItem('id'));
    const token = JSON.parse(localStorage.getItem('token'));

    axios.get(`http://${IP}:8080/api/score/getscore/${id}`,
        { headers: { "Authorization": `Bearer ${token}` }})
        .then(response => {
            let result = response.status;
            //console.log(response)
            if (result === 200) {
                setIsLoggedIn(true);
            }
        })
        .catch(error => {
            if (error.response) {
                setIsLoggedIn(false);
            }
        });
}
*/
