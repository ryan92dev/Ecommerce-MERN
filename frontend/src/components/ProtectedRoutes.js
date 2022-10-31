import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ admin }) => {
  const auth = true;

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
