import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { Layout } from "./Layout";
import { lazy, Suspense, useEffect} from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from "./PrivateRoute";
import { useAuth } from "../hooks/useAuth";
import {refreshUser} from '../redux/auth/operation'


const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout/>} >
              <Route path="/" element={<HomePage />} />
              <Route 
                path="/register" 
                element={
                  <RestrictedRoute 
                    redirectTo="/contacts" 
                    component={<RegisterPage />} 
                  />} />
              <Route 
                path="/login"
                element={
                  <RestrictedRoute 
                    redirectTo="/contacts"
                    component={<LoginPage />} />} 
                  />
              <Route 
                path="/contacts" 
                element={
                  <PrivateRoute 
                    redirectTo="/login" 
                    component={<ContactsPage />}/>
                  }
                  />
          </Route>  
        </Routes>
      </Suspense>
      <Toaster />
  </>
  );
}


