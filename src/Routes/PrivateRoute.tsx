import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LocalStorage } from "../Constants/Helper";
import Header from "../Components/Main/Header";
import Footer from "../Components/Main/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function PrivateRoute() {
  let isAuth = LocalStorage();
  return isAuth ? (
    <div>
      <ToastContainer />
        <Header />
          <main>
            <Outlet />
          </main>
        <Footer />
    </div>
  ) : (
    <Navigate to={{ pathname: "/" }} />
  );
}

export default PrivateRoute;
