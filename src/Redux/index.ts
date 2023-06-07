import { configureStore } from "@reduxjs/toolkit";
import ImageSliceReducer from "./Features/ImageLibrary/ImageSlice";
import AuthSliceReducer from "./Features/Auth/AuthSlice";
import ErrorMsgSliceReducer from "./Components/ErrorMsgSlice";
import CodeInputSlice from "./Components/CodeInputSlice";
import ProfileModal from "./Features/Profile/ProfileModal";
import LogoutModalSlice from "./Features/Logout/LogoutModalSlice";
import CustomerModalSlice from "./Features/Customer/CustomerModalSlice";
import CustomerDetailsSlice from "./Features/Customer/CustomerDetailsSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        errorMsg: ErrorMsgSliceReducer,
        codeInput: CodeInputSlice,
        profileModal: ProfileModal,
        logoutModal: LogoutModalSlice,
        scanCustomerModal: CustomerModalSlice,
        customers: CustomerDetailsSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
