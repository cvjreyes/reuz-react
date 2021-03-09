import React from 'react';
import { MapContainer, TileLayer, Circle, useMap } from 'react-leaflet';
import Leaflet from 'leaflet/dist/leaflet.css'

const DinamicBounds = ({ position}) => {
    const map = useMap();
    map.setView(position)
    return null
}

const ProductMap = ({productPosition}) => {

    return (
        <MapContainer
            center={productPosition}
            zoom={16}
            scrollWheelZoom={false}
            zoomControl={false}
            dragging={false}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Circle
                center={productPosition}
                radius={250}
                weight={2}
                color={'#E89F71'}
                fillColor={'#F9F1E7'}
                fillOpacity={0.25} >
            </Circle>
            <DinamicBounds
                position={productPosition}
            />
        </MapContainer>
    )
}

export default ProductMap;