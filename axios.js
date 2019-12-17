//Defines api being used
import axios from "axios";

const baseURL = 'http://597e0a72.ngrok.io';

const api = axios.create({
  baseURL
});

export default api;
