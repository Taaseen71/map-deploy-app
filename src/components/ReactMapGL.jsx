import react, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid"
import axios from 'axios';
import MapGL, { Marker, Popup } from "react-map-gl";
// import MarkerIcon from "./Marker-Icon.svg"
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
MapGL.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


function ReactMapGL() {

    useEffect(() => {
        fetchData()
        console.log(mapData)
    }, [])

    const fetchData = async () => {
        const data = await axios('https://data.cityofnewyork.us/resource/if26-z6xq.json');
        setMapData(data.data);
    }
    const [mapData, setMapData] = useState([{}])
    const [viewport, setViewport] = useState({
        latitude: 40.7128,
        longitude: -74.0060,
        zoom: 9,
        width: "95vw",
        height: "45vh"
    })

    const [compostLocation, setCompostLocation] = useState(null)

    const mapRef = useRef()

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <MapGL
                ref={mapRef}
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={(viewport) => { setViewport(viewport) }}
                mapStyle="mapbox://styles/taaseen71/ckleb8llf0zv817lk5y1asq7s"
            >
                {/* {mapData.map(compostSite => (
                    <Marker
                        key={uuidv4()}
                        latitude={compostSite.point.coordinates[1]}
                        longitude={compostSite.point.coordinates[0]}
                    >
                        <button
                            className="marker-btn"
                            onClick={e => {
                                e.preventDefault();
                                setCompostLocation(compostSite);
                            }}
                        >
                            <img src="/Marker-Icon.svg" alt="Marker Icon" />
                        </button>
                    </Marker>
                ))
                } */}

                {compostLocation && (
                    <Popup latitude={compostLocation.point.coordinates[1]} longitude={compostLocation.point.coordinates[0]}>
                        <div>
                            <p>{compostLocation.location}</p>
                            <p>{compostLocation.food_scrap_drop_off_site}</p>
                            <p>{compostLocation.borough}</p>
                        </div>
                    </Popup>
                )}
            </MapGL>
        </div>
    )
}

export default ReactMapGL
