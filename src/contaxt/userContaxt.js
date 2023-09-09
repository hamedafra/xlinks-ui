import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { checkAndRefreshToken } from '@/utils/auth.js';


export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
  
    const isAuthenticated = await checkAndRefreshToken();
    if (!isAuthenticated) {
      setIsLoading(false);
      setUser(null);
      return;
    }
  
    try {
      const res = await axios.get("https://mylinks.ir/api/profile/", {
        headers: {
          Authorization: `Bearer ${new Cookies().get("access_token")}`,
        },
      });
      setUser(res.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setUser(null);
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
