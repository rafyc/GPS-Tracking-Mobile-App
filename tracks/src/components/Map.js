import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';




const Map = () => {
  const { state: { currentLocation, location } } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marinTop: 200 }} />;
  }

  initialLocation = {
    longitude: -73.6047964,
    latitude: 45.5368259,
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...initialLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }} >

      <Circle
        center={currentLocation.coords}
        radius={50}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline coordinates={location.map(loc => loc.coords)} />
    </MapView>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  map: {
    height: 300,
  }
});


export default Map;
