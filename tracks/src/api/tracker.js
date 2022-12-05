import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const instance = axios.create({
  baseURL: 'https://32ed-184-163-110-43.ngrok.io'
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Athorization = `Bearer ${token}`;
    }
    return config;
    // return ne modified config file
  },
  (err) => {
    return Promise.reject(err)
  }
);

export default instance;
