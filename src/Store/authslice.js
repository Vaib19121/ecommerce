import { createSlice } from "@reduxjs/toolkit";
import firebase, { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import Alerts from "../Components/Alert";

const initialState = {
    isLoggedIn: false,
    token: null,
    user: null,
    user_id: null,
};

const login = createSlice({
    name: "Login",
    initialState: initialState,
    reducers: {
        Login: (state, action) => {
            //console.log('In login reducer', action.payload);
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.user_id = action.payload.user_id;
        },
        logout: (state, action) => {
            state.isLoggedIn = false;
            state.user_id = null;
            state.user = null;
            state.token = null;
        },
    },
});

export const loginAction = (email, password) => async (dispatch) => {
    try {
        const detail = await signInWithEmailAndPassword(auth, email, password);
        dispatch(
            Login({
                token: detail.user.refreshToken,
                user_id: detail.user.uid,
                user: detail.user.email,
            })
        );
        let params = {
            title: "Login Successful",
            description: detail.user.email,
            status: "success",
            duration: 3000,
            isClosable: true,
        };
        Alerts(params);
    } catch (err) {
        let params = {
            title: "An error occurred.",
            description: err.message,
            status: "error",
            duration: 3000,
            isClosable: true,
        };
        Alerts(params);
    }
};

export const logoutAction = () => async (dispatch) => {
    try {
        await signOut(auth);
        dispatch(logout());
        let params = {
            title: "Logout Successful",
            description: "You have been logged out.",
            status: "success",
            duration: 3000,
            isClosable: true,
        };
        Alerts(params);
    } catch (err) {
        let params = {
            title: "An error occurred.",
            description: err.message,
            status: "error",
            duration: 3000,
            isClosable: true,
        };
        Alerts(params);
    }
};

export const registerAction = (email, password) => async (dispatch) => {
    try {
        const detail = await createUserWithEmailAndPassword(auth, email, password);
        dispatch(
            Login({
                token: detail.user.refreshToken,
                user_id: detail.user.uid,
                user: detail.user.email,
            })
        );
        let params = {
            title: "Registration Successful",
            description: detail.user.email,
            status: "success",
            duration: 3000,
            isClosable: true,
        };
        Alerts(params);
    } catch (err) {
        let params = {
            title: "An error occurred.",
            description: err.message,
            status: "error",
            duration: 3000,
            isClosable: true,
        };
        console.log(err);
        Alerts(params);
    }
};

export const { Login, logout } = login.actions;
export default login.reducer;
