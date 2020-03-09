import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

// 제주시 33.5038303,126.4599599
// 제주공항 33.5104135,126.4891594

const ASPECT_RATIO = width / height;
const LATITUDE = 33.5038303; 
const LONGITUDE = 126.4599599;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;
export interface Region {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}
const style = StyleSheet.create({
    container: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        },
    map: {
        flex: 1,
        // position: 'absolute',
        // top:0,
        // left:0,
        // right:0,
        // bottom: 0,
        width: '100%',
        height: 400,
    }
})
export const Map = () => {
    const [region, setRegion] = useState<Region>();

    useEffect(()=>{
        setRegion({
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        });
    }, []);

    return (
        <View style={style.container}>
            <MapView style={style.map} provider={PROVIDER_GOOGLE}
                     initialRegion={region}
                     zoomEnabled={true}
                     pitchEnabled={true}
                     rotateEnabled={true}
                     zoomControlEnabled={true}
                     zoomTapEnabled={true}
                     scrollEnabled={true}
                     toolbarEnabled={true}
                     loadingEnabled={true}>
                <Marker coordinate={{latitude:33.5104135, longitude:  126.4891594}} pinColor="#ff3333" title="제주공항" />
            </MapView>
        </View>
    );
};
