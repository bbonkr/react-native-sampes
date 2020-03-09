import React, { FunctionComponent, useCallback } from "react";
import {Linking} from 'react-native';
import {Button} from 'react-native';

export interface OpenMapButtonProps {
    latitude?: number;
    longitude?: number;
}

export const OpenMapButton: FunctionComponent<OpenMapButtonProps> = (props) => {
    const onClick = useCallback((e)=>{
        let {latitude, longitude} = props;
        const placeId= '제주공항';
        // latitude:33.5104135, longitude:  126.4891594
        latitude = latitude ||33.5104135;
        longitude = longitude ||  126.4891594;
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${encodeURIComponent( placeId|| '')}`);
    },[]);

    return <Button title="열기" onPress={onClick}>열기</Button>;
};