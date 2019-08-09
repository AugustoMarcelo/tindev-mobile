import axios from 'axios';

const api = axios.create({
  // adb reverse tcp:3333 tcp:3333 configurado
  baseURL: 'http://192.168.0.106:3333',
});

export default api;
