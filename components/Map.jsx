import React, {useEffect, useRef, forwardRef} from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import test from '../json/text.json'

const Map = () => {
    const myRef = useRef();

    useEffect(()=>{
        const { current = {} } = myRef;
        const { leafletElement: map } = current;

        if(!map) return;

        const testGeoJson = new L.GeoJSON(test);
        testGeoJson.addTo(map);
    }, [])

    return (
        <MapContainer refs={myRef} center={[39.50, -98.35]} zoom={4} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic29uYXJ1IiwiYSI6ImNrcHRwbncxMzB1a3cyb21ubWxoN3NqdXkifQ.N-P3NsTouYIFDzY_X8jaRg`}
            />
            {test.features.map(item =>(
                <Marker 
                key={item.id}
                position={[item.geometry.coordinates[1],item.geometry.coordinates[0]]}
                draggable={false}
            animate={true}
            >
                <Popup onOpen={()=>console.log(`${item.properties.Name}`)}>
                    {item.properties.Code}
                </Popup>
            </Marker>
            ))}
        </MapContainer>
    )
}

export default Map