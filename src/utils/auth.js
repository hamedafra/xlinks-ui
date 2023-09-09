import { refreshToken } from './refresh';
import Cookies from 'universal-cookie';


export const checkAndRefreshToken = async (req) => {
  const cookies = new Cookies();
  const accessToken = cookies.get('access_token');
  const accessTokenExpiry = new Date(cookies.get('access_token_expiry'));

  if (!accessToken) return false;

  if (new Date() > accessTokenExpiry) {
    const newToken = await refreshToken();
    return !!newToken;
  }

  return true;
};