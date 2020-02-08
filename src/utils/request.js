import axios from 'axios';
import store from '@/store';
import { getStorage } from '@/utils/localStorage';

const DEFAULT_API_URLS = '';

const { stringify, parse } = JSON;
export const parseNetworkError = (error) => parse(stringify(error));

const withBaseURLContext = () => (process.env.NODE_ENV
  ? DEFAULT_API_URLS[process.env.NODE_ENV.toUpperCase()]
  : DEFAULT_API_URLS.development);

const http = axios.create({
  baseURL: withBaseURLContext(),
});

http.interceptors.request.use((config) => {
  store.commit('SET_API_CALL_IN_PROGRESS', true);

  const token = getStorage('token');

  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`; /* eslint no-param-reassign:0 */
  }

  return config;
}, (response) => Promise.reject(response));

http.interceptors.response.use((response) => {
  store.commit('SET_API_CALL_IN_PROGRESS', false);

  return response;
}, (error) => Promise.reject(error));

export default http;
