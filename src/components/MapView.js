import React, { Component, useEffect, useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';

function MapView (props) {
  
  let [currentLocation, setCurrentLocation] = useState({ lat:props.loc1 , lng: props.loc2 });
  let [zoom, setZoom] = useState(7);

  useEffect(()=>{
      setCurrentLocation({ lat:props.loc1 , lng: props.loc2 });
  }, [props.loc1, props.loc2])

    return (
      <Map center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        
        <Markers venues={data.venues}/>
      </Map>
    );
  }


export default MapView;
