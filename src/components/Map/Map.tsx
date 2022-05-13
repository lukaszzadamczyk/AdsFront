import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon';

import 'leaflet/dist/leaflet.css';
import './Map.css';

export const Map = () => {
    return(
        <div className='map'>
            <MapContainer center={[41.3808959,2.1183351]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[41.3808959,2.1183351]}>
                    <Popup>
                        <h2>Camp Nou</h2>
                        <p>The biggest stadium in Europe.</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}