import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Cookies from "universal-cookie";

const UserContext = React.createContext();

export const UserContaxtProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchUser = useCallback(async () => {
    const cookies = new Cookies();
    setIsLoading(true);

    try {
      // Make the Axios GET request to the correct URL
      const res = await axios.get("https://mylinks.ir/profile/", {
        headers: {
          auth: cookies.get("auth"),
        },
      });

      // Assuming the response contains user data, update the state
      setUser(res.data.user);
      setIsLoading(false);
    } catch (err) {
      // Handle errors and update the state accordingly
      setIsLoading(false);
      setUser(null);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return <UserContext.Provider>{children}</UserContext.Provider>;
};

export default UserContaxtProvider;
