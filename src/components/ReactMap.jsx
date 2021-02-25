import React, { useState, useRef, useEffect } from 'react'

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function ReactMap() {

    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        zoom: 9,
        width: "95vw",
        height: "50vh"
    })
    const [map, setMap] = useState(null)
    const mapContainer = useRef(null);
    console.log(mapContainer)

    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/taaseen71/ckleb8llf0zv817lk5y1asq7s",
                center: [viewport.longitude, viewport.latitude],
                zoom: viewport.zoom,
            })

            map.on("load", () => {
                setMap(map);
                map.resize();
            })
        }

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map])


    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div ref={el => mapContainer.current = el} style={{ width: viewport.width, height: viewport.height }} />
        </div>
    )
}

export default ReactMap;






// import ReactMapGL, { Marker } from "react-map-gl";
{/* <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={(viewport) => { setViewport(viewport) }}
                mapStyle="mapbox://styles/taaseen71/ckleb8llf0zv817lk5y1asq7s"
            >
                {importJsonhere}
            </ReactMapGL> */}