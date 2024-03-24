import React, { useState, useEffect } from 'react'
//npm i react-leaflet
//npm i leaflet
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from "leaflet"
import { Search } from './Search.jsx';

const icon = L.icon({
    iconUrl: "location_icon.png",
    iconSize: [ 30, 30 ]
})


export const Leaflet = () => {

    const thanePosition = [19.2183, 72.9781]

    const [selectedPlace, setSelectedPlace] = useState("");
    var locationMarker;
    if(selectedPlace!=="")
    {
        locationMarker = [ selectedPlace.lat, selectedPlace.lon ]
    }
    else{
        locationMarker = thanePosition
    }

    return (
        <>
        <div id="map">
            <MapContainer style={{ height: "500px", width: "100%" }} center={thanePosition} zoom={13.2}>
            <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap </a> contributors'
                //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=DcsGEOE2DeJyf3EOJv4Z"
            />
            <Marker position={locationMarker} icon={icon}>
            </Marker>

            <ResetMapAnimation locationMarker={locationMarker} />
            </MapContainer>

            <Search selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}/>
        </div>

        </>
    )
}

function ResetMapAnimation({locationMarker}) {
    const map = useMap()

    useEffect(() => {
        if(locationMarker){
            map.setView(
                L.latLng(locationMarker[0], locationMarker[1]),
                map.getZoom(),
                { animate: true }
            )
        }
    }, [locationMarker]);
   
    return null
}