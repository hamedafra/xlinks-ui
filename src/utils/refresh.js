import axios from 'axios';
import Cookies from 'universal-cookie';

export const refreshToken = async () => {
  const cookies = new Cookies();
  const refresh_token = cookies.get('refresh_token');

  if (!refresh_token) return null;

  try {
    const response = await axios.post('https://mylinks.ir/api/token/refresh/', {
      refresh: refresh_token,
    });

    const newAccessToken = response.data.access;
    const accessTokenExpiry = new Date(response.data.access_token_expires_at);

    cookies.set('access_token', newAccessToken, {
      path: '/',
      expires: accessTokenExpiry,
    });

    return newAccessToken;
  } catch (error) {
    console.error('Error refreshing token', error);
    return null;
  }
};
