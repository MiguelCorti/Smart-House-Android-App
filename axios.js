//Defines api being used
import axios from "axios";

const baseURL = 'http://6b5caa1c.ngrok.io';

const api = axios.create({
  baseURL
});

export default api;
