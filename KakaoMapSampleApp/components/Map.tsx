import React from 'react';
import MapView from 'react-native-daummap';

export const Map = () => {
    return (<MapView 
    initialRegion={{
        latitude: 36.143099,
        longitude: 128.392905,
        zoomLevel: 5,
    }}
    mapType={"Standard"}
    style={{ width: '100%', height: 300, }} 
    />);
};