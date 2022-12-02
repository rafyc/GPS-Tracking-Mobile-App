import * as Location from 'expo-location';

const tenMetersWithDegres = 0.0001;

const getLocation = increment => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitute: 5,
      latitude: 45.5368259 + increment * tenMetersWithDegres,
      longitude: -73.6047964 + increment * tenMetersWithDegres,
    }
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
