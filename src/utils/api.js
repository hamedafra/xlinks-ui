import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:8000', // Update with your API URL
  timeout: 10000, // Set the timeout for requests
});

// Interceptor to add Authorization header with access token
api.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken');
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

// Interceptor to handle responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, e.g., log out the user
      // You can redirect to the login page or show an error message
    }
    return Promise.reject(error);
  }
);

export default api;
