import React, { Component } from 'react';
import GoogleMap from "google-map-react"

export default function Map(){
    const loadingElementStyle = { height: '100%' };
    const containerElementStyle = { height: '280px' };
    const mapElementStyle = { height: '100%' };

    return (
        <GoogleMap
            // bootstrapURLKeys={ AIzaSyCphzb8pPh3yaQAtVIeIqrYL1eBAbr3Zsc }
            defaultZoom={2}
            defaultCenter={{ lat: 40.23164130704827, lng: 15.088623999999982 }}
            mapTypeId={"terrain"}
            loadingElement={<div style={ loadingElementStyle } />}
            containerElement={<div style={ containerElementStyle } />}
            mapElement={<div style={ mapElementStyle } />}
        ></GoogleMap>
    );
}
    
