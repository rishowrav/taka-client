import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("user"));

    if (localData) {
      setCurrentUser(localData);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  // Logout
  const logOut = () => {
    setCurrentUser("");
    localStorage.removeItem("user");
    setLoading(false);

    axiosPublic.post("/logout");
  };

  const dataInfo = { currentUser, setCurrentUser, setLoading, loading, logOut };

  return (
    <authContext.Provider value={dataInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
