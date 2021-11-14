import React, {useState} from 'react';
import {Map, Marker} from 'pigeon-maps';

function MyMap() {
    const [center, setCenter] = useState([35.6892, 51.3890]);
    const [zoom, setZoom] = useState(11);
    const [hue, setHue] = useState(0);
    const color = `hsl(${hue % 360}deg 39% 70%)`;
    return (
        <Map 
        width={'100%'}
        height={'100%'}
        center={center} 
        zoom={zoom} 
        onBoundsChanged={({ center, zoom }) => { 
            setCenter(center) 
            setZoom(zoom) 
        }} 
        >
            <Marker 
                width={50}
                anchor={[35.6892, 51.3890]} 
                color={color} 
                onClick={() => setHue(hue + 20)} 
            />
        </Map>
    )
}

export default MyMap