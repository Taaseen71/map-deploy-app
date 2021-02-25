import React, { useState } from 'react'
import ReactMapGL from "react-map-gl";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'


function ReactMap() {

    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        zoom: 9,
        width: "95vw",
        height: "50vh"
    })

    return (
        <div>
            <ReactMapGL {...viewport}>

            </ReactMapGL>
        </div>
    )
}

export default ReactMap;
