import React, {useEffect, useState} from 'react';
import BingMapsReact from "bingmaps-react";
import {BingMapsContainer} from "./style/Bingmapsstyle";

export const Bingmaps = () => {
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();

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

    useEffect(() => {
        if (window.innerWidth <= 500) {
            setHeight("55vh");
            setWidth("69vw");
        } else {
            setHeight("63vh");
            setWidth("74vw");
        }
    }, []);

    const pushPins = [pushPin, pushPin1];

    return (
        <BingMapsContainer>
            <BingMapsReact height={height}
                           width={width}
                           bingMapsKey=""
                           viewOptions={{
                               center: {latitude: 52.2289, longitude: 5.1655},
                               zoom: 13
                           }}
                           pushPinsWithInfoboxes={pushPins} />
        </BingMapsContainer>
        )
}
