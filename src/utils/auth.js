import Cookies from 'js-cookie';

// Function to check if the user is authenticated
export function isAuthenticated() {
  const token = Cookies.get('accessToken');
  return !!token; // Returns true if token exists, false otherwise
}