import React, { useState } from 'react'
import ReactMapGL, { Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';


function ReactMap() {

    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        zoom: 9,
        width: "95vw",
        height: "50vh"
    })

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={(viewport) => { setViewport(viewport) }}
                mapStyle="mapbox://styles/taaseen71/ckleb8llf0zv817lk5y1asq7s"
            >
                {/* {importJsonhere} */}
            </ReactMapGL>
        </div>
    )
}

export default ReactMap;
