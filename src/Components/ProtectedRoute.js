import React from "react";
import { Navigate } from "react-router-dom";
import { Home } from "./Home";

const ProtectedRouteWrapper = ({ showAlert }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Home showAlert={showAlert} />;
};

export default ProtectedRouteWrapper;