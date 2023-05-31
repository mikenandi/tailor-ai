import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
    isLogedOut: boolean;
    authToken: string;
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    oldPassword: string;
}

const initialState: AuthState = {
    isLogedOut: true,
    authToken: "",
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    oldPassword: "",
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

        nameReducer: (state, actions: PayloadAction<string>) => {
            state.name = actions.payload;
        },
        emailReducer: (state, actions: PayloadAction<string>) => {
            state.email = actions.payload;
        },
        phoneNumberReducer: (state, actions: PayloadAction<string>) => {
            state.phoneNumber = actions.payload;
        },
        passwordReducer: (state, actions: PayloadAction<string>) => {
            state.password = actions.payload;
        },
        oldPasswordReducer: (state, actions: PayloadAction<string>) => {
            state.oldPassword = actions.payload;
        },
        userProfileReducer: (
            state,
            actions: PayloadAction<{
                name?: string | undefined;
                email: string;
                phoneNumber?: string | undefined;
            }>
        ) => {
            state.name = actions.payload?.name ?? "";
            state.email = actions.payload.email;
            state.phoneNumber = actions.payload?.phoneNumber ?? "";
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
    userProfileReducer,
    phoneNumberReducer,
    oldPasswordReducer,
} = authSlice.actions;

export default authSlice.reducer;
