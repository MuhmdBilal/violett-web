import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {BACKEND_URI } from "../../Config/Config"
const initialState = {
    isLogging: false,
    isRegistering: false,
};

export const login = createAsyncThunk('auth/login', async (data: any, thunkAPI: any) => {
    try {
        const response = await axios.post(`${BACKEND_URI}/auth/login`, {
            email: data?.email,
            password: data?.password
        })          
        if (response?.status === 200) {
            return {
                response: response?.data,
                status: true,
                
            };
        }

        return {
            status: false,
            message: 'Failed to save records. Please try again.'
        };

    } catch (e: any) {
        return thunkAPI.rejectWithValue(e.response.data);
    }
});

export const registration = createAsyncThunk('auth/register', async (data: any, thunkAPI: any) => {
    
    try {
        const response = await axios.post(`${BACKEND_URI}/auth/register`, {
            email: data?.email,
            name: data?.Fullname,
            password: data?.password
        })
        console.log('response?.status', response?.status)
        if (response?.status === 200) {
            return {
                response: response?.data,
                status: true,
                message: 'Registered successfully.'
            };
        }

        return {
            status: false,
            message: 'Failed to save records. Please try again.'
        };

    } catch (e: any) {
        return thunkAPI.rejectWithValue(e.response.data);
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLogging = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                const userData = action.payload.response.user;
                state.isLogging = false;
                localStorage.setItem('token', action.payload.response.token)
                localStorage.setItem('userData', JSON.stringify(userData))
            })
            .addCase(login.rejected, (state, action) => {
                state.isLogging = false;
            }).addCase(registration.pending, (state) => {
                state.isRegistering = true;
            })
            .addCase(registration.fulfilled, (state, action) => {
                const userData = action.payload.response;
                state.isRegistering = false;
                localStorage.setItem('token', action.payload.response.token)
                localStorage.setItem('userData', JSON.stringify(userData))
            })
            .addCase(registration.rejected, (state, action) => {
                state.isRegistering = false;
            });
    },
});

export default authSlice.reducer;
