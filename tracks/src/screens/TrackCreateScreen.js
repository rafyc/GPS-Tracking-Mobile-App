import React, { useContext, useCallback } from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import '../_mokeLocation';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';


const TrackCreateScreen = ({ isFocused }) => {
  const { state: { recording }, addLocation } = useContext(LocationContext);
  const callback = useCallback((location) => {
    addLocation(location, recording);
  }, [recording]);

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
      <Text h1>Track create Screen</Text>
      <Map />
      {err ? <Text>Plean enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  }
});

export default withNavigationFocus(TrackCreateScreen);
