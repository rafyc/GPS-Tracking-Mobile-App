import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48 }}>Track list Screen</Text>
      <Button
        title='Go to Track Detail'
        onPress={() => navigation.navigate('TrackDetail')}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  }
});

export default TrackListScreen;
