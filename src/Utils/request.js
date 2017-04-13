import axios from 'axios';
let baseUrl = 'http://mkovacina.pythonanywhere.com/';
let token = 'Token c031e75a8057288f949d634e3b304be2ad976adc';

// axios.defaults.headers.common['Authorization'] = token;

// General
export function req(method, url, params) {

  const body = method === 'get' ? 'params' : 'data';

  const config = {
    method,
    url,
    headers: {
      'Authorization': token
    },
    withCredentials: true,
    baseURL: baseUrl,
    [body]: params || {}
  }

  return axios.request(config);
}
