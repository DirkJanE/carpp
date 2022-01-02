import React from 'react';
import BingMapsReact from "bingmaps-react";
import {RowContainer} from "../../../style/Style";

export const Mapcontainer = () => {

    const pushPin = {
        center: {
            latitude: 52.2291,
            longitude: 5.1668,
        },
        options: {
            title: "Hilversum",
            subTitle: "testtesttest"
        },
    }

    const pushPin1 = {
        center: {
            latitude: 52.2292,
            longitude: 5.1650,
        },
        options: {
            title: "Hilversum1",
            subTitle: "testtestest"
        },
    }


    const pushPins = [pushPin, pushPin1];

    return (
        <RowContainer style={{height:"67vh", width:"76vw", backgroundColor: "#cb6939", borderRadius: "10px", marginTop: "2vh"}}>
            <BingMapsReact height="63vh"
                           width="74vw"
                           bingMapsKey=""
                           viewOptions={{
                               center: {latitude: 52.2289, longitude: 5.1655},
                               zoom: 13
                           }}
                           pushPinsWithInfoboxes={pushPins} />
        </RowContainer>
        )
}
