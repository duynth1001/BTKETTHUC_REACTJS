import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/UserContext/UserContext";
import { PATH } from "../../routes/path";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";

const AdminLayout = () => {
    const { currentUser } = useAuth();
    if (currentUser && currentUser.maLoaiNguoiDung === "QuanTri") {
    return (
      <div style={{backgroundColor:'#F5ECEC'}}>
        <Header/>
        <Outlet />
        <Footer/>
      </div>
    );
  }
  
  return <Navigate to={PATH.HOME} />;
};

export default AdminLayout;
