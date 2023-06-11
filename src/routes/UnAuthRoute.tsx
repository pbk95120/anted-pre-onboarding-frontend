import { Outlet, Navigate } from "react-router-dom";

const UnAuthRoute = () => {
  const token = localStorage.getItem("access_token");
  return token ? <Navigate to={"/todo"} /> : <Outlet />;
};

export default UnAuthRoute;
