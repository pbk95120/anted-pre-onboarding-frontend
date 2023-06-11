import { Outlet, Navigate } from "react-router-dom";

const AuthRoute = () => {
  const token = localStorage.getItem("access_token");
  return token ? <Outlet /> : <Navigate to={"/signin"} />;
};

export default AuthRoute;
