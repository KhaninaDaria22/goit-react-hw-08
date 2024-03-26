import {  Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {Layout} from "./Layout";

// const HomePage = lazy(() => import("../pages/Home"));
// const RegisterPage = lazy(() => import("../pages/Register"));
// const LoginPage = lazy(() => import("../pages/Login"));
// const ContactsPage = lazy(() => import("../pages/Contacts"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />} />
            <Route index element={<div>HOME</div>} />
            <Route path="/register" element={<div>REGISTER</div>} />
            <Route path="/login" element={<div>LOGIN</div>} />
            <Route path="/contacts" element={<div>CONTACTS</div>} />
        </Routes>
      </Suspense>
      <Toaster />
    </Layout>
  );
}