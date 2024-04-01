import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
};

// 1 POST /users/signup
//{ name, email, password }
export const register = createAsyncThunk(
    'auth/register',
    async (userInfo, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup',
            userInfo);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    } 
);

// 2 POST /users/login
//{ email, password }

export const logIn = createAsyncThunk(
    '/auth/login',
    async (userInfo, thunkAPI) => {
        try { 
            const response = await axios.post('/users/login', 
            userInfo);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// 3 POST /users/logout
//headers: Authorization: Bearer token 

export const logOut = createAsyncThunk(
    '/users/logout', 
    async (_ , thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }

)

//4 GET /users/current
//headers: Authorization: Bearer token

export const refreshUser = createAsyncThunk(
    '/users/current', 
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persisredToken = state.auth.token;

        if(persisredToken ==- null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persisredToken);
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    } 
)

