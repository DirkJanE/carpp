import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Mapcontainer = () => {
    const containerStyle = {
        height: "68.5vh",
        width: "76vw",
        marginTop: "2vh",
        borderRadius: 10
    };

    const center = {
        lat: 52.2292,
        lng: 5.1669
    };

    const { isLoaded } = useJsApiLoader({
        id: 'carpp-336114',
        googleMapsApiKey: ""
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(Mapcontainer)
