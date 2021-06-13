import React, {useEffect, useRef, useState} from 'react'
import L from 'leaflet'
import { Row, Col } from "antd";
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import test from '../json/text.json'

const Map = () => {
    const [chooseName, SetChooseName] = useState("");
    const myRef = useRef();

    useEffect(()=>{
        const { current = {} } = myRef;
        const { leafletElement: map } = current;

        if(!map) return;

        const testGeoJson = new L.GeoJSON(test);
        testGeoJson.addTo(map);
    }, [])

    return (
        
            <Row className="map-content">
                <Col
                    className="map-div"
                    sm={{ span: 24 }}
                    xl={{ span: 12 }}
                    xxl={{ span: 12 }}
                >
                    <MapContainer refs={myRef} center={[39.50, -98.35]} zoom={4} scrollWheelZoom={false} className="map-canvas">
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
                            <Popup onOpen={()=>{SetChooseName(item.properties.Name)}}>
                                {item.properties.Code}
                            </Popup>
                        </Marker>
                        ))}
                    </MapContainer>
                </Col>
                <Col
                    sm={{ span: 24 }}
                    xl={{ span: 12 }}
                    xxl={{ span: 12 }}
                >
                    <p>{chooseName}</p>
                </Col>
            </Row>
        
    )
}

export default Map