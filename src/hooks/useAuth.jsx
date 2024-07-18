import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";

const useAuth = () => {
  const data = useContext(authContext);

  return data;
};

export default useAuth;
