import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Cookies from "universal-cookie";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    const cookies = new Cookies();
    setIsLoading(true);

    try {
      // Make the Axios GET request to the correct URL
      const res = await axios.get("https://mylinks.ir/api/profile/", {
        headers: {
          Authorization: `Bearer ${cookies.get("access_token")}`,
        },
      });

      // Assuming the response contains user data, update the state
      setUser(res.data);
      setIsLoading(false);
    } catch (err) {
      // Handle errors and update the state accordingly
      if (err.response && err.response.status === 401) {
        // If the access token is expired, try to refresh it
        try {
          const refreshToken = cookies.get("refresh_token");
          const refreshRes = await axios.post(
            "https://mylinks.ir/api/token/refresh/",
            {
              refresh: refreshToken,
            }
          );

          // Update the access token in cookies
          cookies.set("access_token", refreshRes.data.access, { path: "/" });

          // Retry fetching the user with the new access token
          const newAccessToken = refreshRes.data.access;
          const newRes = await axios.get("https://mylinks.ir/api/profile/", {
            headers: {
              Authorization: `Bearer ${newAccessToken}`,
            },
          });

          // Assuming the response contains user data, update the state
          setUser(newRes.data.user);
          setIsLoading(false);
        } catch (refreshError) {
          // Handle the refresh token error (e.g., log the user out)
          setIsLoading(false);
          setUser(null);
        }
      } else {
        // Handle other errors
        setIsLoading(false);
        setUser(null);
      }
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <UserContext.Provider value={{ user, isLoading, reFetchUser: fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
