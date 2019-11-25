//Defines api being used
import axios from "axios";

const baseURL = 'https://ngrok.io';

const api = axios.create({
  baseURL
});

export default api;
