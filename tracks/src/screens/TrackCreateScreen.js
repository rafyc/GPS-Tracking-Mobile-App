import React, { useState, useEffect, useContext } from 'react';
import { Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';
import '../_mokeLocation';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';


const TrackCreateScreen = () => {

  const { addLocation } = useContext(LocationContext);

  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();

      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      }, (location) => {
        addLocation(location);
      })

      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      setErr(e);
    }
  };


  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
      <Text h1>Track create Screen</Text>
      <Map />
      {err ? <Text>Plean enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  }
});

export default TrackCreateScreen;
