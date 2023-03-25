import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
import tw from 'twrnc';

const Map = () => {
  const origin = useSelector(selectOrigin);

  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Map;

const styles = StyleSheet.create({});
