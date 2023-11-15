import axios from 'axios';

const baseURL = 'https://yukiosrandoms.pythonanywhere.com/api/'; 

const api = axios.create({
  baseURL,
});

export default api;
