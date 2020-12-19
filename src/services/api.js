import axios from 'axios';

const api = axios.create({ baseURL: 'http://green-api.buenavistalab.com/' });

export default api;
