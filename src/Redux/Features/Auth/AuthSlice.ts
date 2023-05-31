import {
    PayloadAction,
    createSlice,
} from "@reduxjs/toolkit";

interface AuthState {
    isLogedOut: boolean;
    authToken: string;
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
}

const initialState: AuthState = {
    isLogedOut: true,
    authToken: "",
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
};

const authSlice = createSlice({
    name: "AUTH",
    initialState,
    reducers: {
        logInReducer: (
            state,
            actions: PayloadAction<{ authToken: string }>
        ) => {
            state.authToken = actions.payload.authToken;
            state.isLogedOut = false;
        },
        logOutReducer: (state) => {
            state.authToken = "";
            state.isLogedOut = true;
        },

        nameReducer: (
            state,
            actions: PayloadAction<string>
        ) => {
            state.name = actions.payload;
        },
        emailReducer: (
            state,
            actions: PayloadAction<string>
        ) => {
            state.email = actions.payload;
        },
        passwordReducer: (
            state,
            actions: PayloadAction<string>
        ) => {
            state.password = actions.payload;
        },
        cleanAuthReducer: (state) => {
            state.name = "";
            state.email = "";
            state.phoneNumber = "";
            state.password = "";
        },
        testlogin: (state) => {
            state.isLogedOut = !state.isLogedOut;
        },
    },
});

export const {
    logInReducer,
    logOutReducer,
    nameReducer,
    emailReducer,
    passwordReducer,
    cleanAuthReducer,
    testlogin,
} = authSlice.actions;

export default authSlice.reducer;
