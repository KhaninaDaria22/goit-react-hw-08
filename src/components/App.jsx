import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {Layout} from "./Layout";
import { lazy } from 'react';


const HomePage = lazy(() => import("../pages/Home"));
// const RegisterPage = lazy(() => import("../pages/Register"));
// const LoginPage = lazy(() => import("../pages/Login"));
// const ContactsPage = lazy(() => import("../pages/Contacts"));

export default function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />} />
            <Route index element={<HomePage/>} />
            {/* <Route path="/register" element={<RegisterPage/>} /> */}
            <Route path="/login" element={<div>LOGIN</div>} />
            <Route path="/contacts" element={<div>CONTACTS</div>} />
        </Routes>
      <Toaster />
    </>     
  );
}