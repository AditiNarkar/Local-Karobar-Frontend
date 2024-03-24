import React, { useState, useEffect } from 'react'
//npm i react-leaflet
//npm i leaflet
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import { Link } from 'react-router-dom'
import L from "leaflet"

const icon = L.icon({
    iconUrl: "location_icon.png",
    iconSize: [ 30, 30 ]
})

const LeafletClickMap = () => {
    const tabs = ['clickmap', 'search-by-address']

    const [activeTab, setActiveTab] = useState(tabs[0]);
    
    useEffect(() => {

        tabs.map((item)=>{
          //console.log(item)
          document.getElementById(item).style.background = "none";
        })
          document.getElementById(activeTab).style.background = "#b1850d8a";
        
      },  [activeTab]);

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
        <div className='maps-header'>
        <div className='logo-h1'>
            <img/>
            Locate your Karobar
        </div>
        <div className='map-divider'></div>
        <div className='maps-tabs'>

            <Link to="mapclick" style={{color: "inherit", textDecoration: "none"}}>
            <div id="clickmap" onClick={(e) =>{
                setActiveTab(e.target.id)
            }}>
                Point on map</div>
            </Link>

            <div className='divider-tabs'></div>

            <Link to="/maps" style={{color: "inherit", textDecoration: "none"}}>
            <div id="search-by-address" className='maps-tabs-inactive' onClick={(e) =>{
                setActiveTab(e.target.id)
            }}>
                Search by address  
            </div>
            </Link>
        </div>
        </div>  
        <div className="Maps-main">

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

        </div>
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

export default LeafletClickMap