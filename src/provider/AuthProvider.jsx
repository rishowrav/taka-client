import { createContext, useEffect, useState } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("user"));

    if (localData) {
      setCurrentUser(localData);

      setLoading(false);
    }

    // eslint-disable-next-line
  }, []);

  const dataInfo = { currentUser, setCurrentUser, setLoading, loading };

  return (
    <authContext.Provider value={dataInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
