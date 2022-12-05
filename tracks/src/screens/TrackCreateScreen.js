import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import '../_mokeLocation';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';


const TrackCreateScreen = ({ isFocused }) => {

  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);

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

export default withNavigationFocus(TrackCreateScreen);
