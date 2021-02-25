import React, { useState, useRef } from 'react'
import MapGL, { Marker } from "react-map-gl";
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
MapGL.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


function ReactMapGL() {

    const [viewport, setViewport] = useState({
        latitude: 40.7128,
        longitude: -74.0060,
        zoom: 9,
        width: "95vw",
        height: "45vh"
    })
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <MapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                // onViewportChange={(viewport) => { setViewport(viewport) }}
                mapStyle="mapbox://styles/taaseen71/ckleb8llf0zv817lk5y1asq7s"
            >
                {/* {importJsonhere} */}
            </MapGL>
        </div>
    )
}

export default ReactMapGL
