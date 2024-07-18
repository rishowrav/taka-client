import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  console.log(currentUser);

  if (loading) {
    return <h1 className="text-center text-5xl font-bold mt-20">loading...</h1>;
  }

  if (currentUser) {
    return children;
  }

  return <Navigate to="/" replace="true" />;
};

export default PrivateRoute;
