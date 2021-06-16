import React, {useEffect, useRef, useState} from 'react'
import { Row, Col } from "antd";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
import L from 'leaflet'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import test from '../json/text.json'

const Map = () => {
    const [chooseName, SetChooseName] = useState("");
    const [viewport, setViewport] = useState({
        width: "50vh",
        height: "50vh",
        // The latitude and longitude of the center of London
        latitude: 39.50,
        longitude: -98.35,
        zoom:2
      });

    return (
        
        <Row className="map-content">
            <Col
                className="map-div"
                sm={{ span: 24 }}
                xl={{ span: 12 }}
                xxl={{ span: 12 }}
            >
                {/* <ReactMapGL
                    className="map-canvas"
                    mapStyle="mapbox://styles/sonaru/ckptpq2ku069717p9qwqxqkv6"
                    mapboxApiAccessToken="pk.eyJ1Ijoic29uYXJ1IiwiYSI6ImNrcHRwbncxMzB1a3cyb21ubWxoN3NqdXkifQ.N-P3NsTouYIFDzY_X8jaRg"
                    {...viewport}
                    onViewportChange={(nextViewport) => setViewport(nextViewport)}
                >
                    {test.features.map(item =>(
                        <Marker 
                        key={item.id}
                        latitude={item.geometry.coordinates[1]}
                        longitude={item.geometry.coordinates[0]}
                        >
                            <a onClick={() => { SetChooseName(item.properties.Name); }}>
                                <span role="img" aria-label="push-pin">◎</span>
                            </a>
                        </Marker>
                    ))}
                </ReactMapGL> */}
                <MapContainer center={[39.50, -98.35]} zoom={3} scrollWheelZoom={false} className="map-canvas">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url={`https://api.mapbox.com/styles/v1/sonaru/ckptpq2ku069717p9qwqxqkv6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic29uYXJ1IiwiYSI6ImNrcHRwbncxMzB1a3cyb21ubWxoN3NqdXkifQ.N-P3NsTouYIFDzY_X8jaRg`}
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