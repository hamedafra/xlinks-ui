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
      const res = await fetchHandler().get("/api/member/profile", {
        method: "GET",
        headers: {
          auth: cookies.get("auth"),
        },
      });
      setUser(res.data.user);
      setIsLoading(false);
    } catch (err) {
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
