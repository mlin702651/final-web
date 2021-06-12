import React, { Component } from 'react';
import GoogleMap from "google-map-react"

export default function Map(){

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMap
                // bootstrapURLKeys={{ key: AIzaSyCphzb8pPh3yaQAtVIeIqrYL1eBAbr3Zsc }}
                defaultZoom={2}
                defaultCenter={{ lat: 25.027231931678905, lng: 121.54327307459816 }}
                mapTypeId={"terrain"}
            >

            </GoogleMap>
        </div>
    );
}
    
