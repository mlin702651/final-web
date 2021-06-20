import React, {useContext ,useEffect, useRef, useState} from 'react'
import { Row, Col } from "antd";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import L from 'leaflet'
// import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
// import "leaflet-defaulticon-compatibility";
import { StoreContext } from "../store";
import ramenPosition from "../json/ramenPosition.json"
import {setMapPosts} from "../actions"

const Map = () => {
    const {state: { requestMapPosts }, dispatch} = useContext(StoreContext);

    const [chooseItem, SetChooseItem] = useState();
    const [viewport, setViewport] = useState({
        width: "50vh",
        height: "50vh",
        // The latitude and longitude of the center of London
        latitude: 23.973875,
        longitude: 120.982024,
        zoom: 6
    });

    useEffect(()=>{
        if(chooseItem)
            setMapPosts(dispatch, chooseItem.id);
            console.log(requestMapPosts.allMapPosts)
    }, [chooseItem])

    return (
        
        <Row className="map-content">
            <div className="map-left-bg"></div>
            <Col
                className="map-div"
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 12 }}
            >
                <ReactMapGL
                    className="map-canvas"
                    mapStyle="mapbox://styles/chiaooo/ckq0g0olo09kr18mz66e6sidd"
                    mapboxApiAccessToken="pk.eyJ1IjoiY2hpYW9vbyIsImEiOiJja3EwZXQwOWQwNDRtMnZuczN3NjI3em5oIn0.ozwqafOkZU2rGzq7_7k1fg"
                    {...viewport}
                    onViewportChange={(nextViewport) => setViewport(nextViewport)}
                >
                    {ramenPosition.map(item =>(
                        <Marker 
                        key={item.id}
                        latitude={item.coordinates[0]}
                        longitude={item.coordinates[1]}
                        offsetLeft={-10}
                        offsetTop={-5}
                        >
                            <a onClick={() => SetChooseItem(item) }>
                                <span className="map-pin" role="img" aria-label="push-pin">◎</span>
                            </a>
                        </Marker>
                    ))}
                </ReactMapGL>
                
                {/* <MapContainer center={chooseItem ? chooseItem.coordinates : [23.973875, 120.982024]} zoom={8} scrollWheelZoom={false} className="map-canvas">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url={`https://api.mapbox.com/styles/v1/chiaooo/ckq0g0olo09kr18mz66e6sidd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2hpYW9vbyIsImEiOiJja3EwZXQwOWQwNDRtMnZuczN3NjI3em5oIn0.ozwqafOkZU2rGzq7_7k1fg`}
                    />
                    {ramenPosition.map(item =>(
                        <Marker 
                        key={item.id}
                        position={[item.coordinates[0],item.coordinates[1]]}
                        draggable={false}
                        animate={true}
                    >
                        <Popup onOpen={()=>{SetChooseItem(item)}}>
                            {item.name}
                        </Popup>
                    </Marker>
                    ))}
                </MapContainer> */}
            </Col>
            <Col
                className="map-article"
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 12 }}
            >
                <div className="store-info">
                    <p className="store-name">{ chooseItem? `${chooseItem.name}` : "" }</p>
                    <p className="store-address">{ chooseItem? `${chooseItem.address}` : "" }</p>
                </div>
                <div style={{height: "1000px"}}></div>
            </Col>
        </Row>
        
    )
}

export default Map