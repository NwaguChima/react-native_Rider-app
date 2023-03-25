import { StyleSheet, Text, View } from 'react-native';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import tw from 'twrnc';

const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;
