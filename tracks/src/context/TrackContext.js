import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {

};

const createTrack = dispatch => (location, name) => {
  console.log(location, name);
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
)
