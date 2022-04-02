import React, {useContext, useEffect, useState} from 'react';
import BingMapsReact from "bingmaps-react";
import {CarppContext} from "../context/CarppContext";

export const BingMaps = () => {
    const result = useContext(CarppContext);
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();
    const [pushPins, setPushPins] = useState();

    //fill the pushpins array with coordinates from result in CarppContext
    useEffect(() => {
        //console.log(result)
        let tempArray = [];
        let pushPin = {
            center: {
                latitude: 0,
                longitude: 0,
            },
            options: {
                title: "",
            },
        }

        for (let i = 0; i < result.userdata.length; i++) {
            pushPin = {
                center: {
                    latitude: result.userdata[i].lat,
                    longitude: result.userdata[i].lon,
                },
                options: {
                    title: "Merk & Type: " + result.userdata[i].brandtype,
                },
            }
            tempArray[i] = pushPin;
        }
        //console.log(tempArray)
        setPushPins(tempArray);

    }, [result]);

        //adjust size when using mobile
        useEffect(() => {
            if (window.innerWidth <= 500) {
                setHeight("55vh");
                setWidth("40vw");
            } else {
                setHeight("63vh");
                setWidth("58vw");
            }
        }, []);

        return (
            <BingMapsReact
                bingMapsKey="AludF50Iyu_3Cg-lglA9RgtbipGbKneiDHYb0pmq23Te9qjlw4jExVCeUAGfkops"
                height={height}
                width={width}
                pushPins={pushPins}
                viewOptions={{
                    center: {latitude: 52.2289, longitude: 5.1655},
                    zoom: 13
                }}
            />
        )
    }
