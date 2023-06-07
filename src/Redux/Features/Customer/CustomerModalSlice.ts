import { createSlice } from "@reduxjs/toolkit";

interface CustomerModalState {
    scanCustomerVisible: boolean;
    customerDetailsVisible: boolean;
}

const initialState: CustomerModalState = {
    scanCustomerVisible: false,
    customerDetailsVisible: false,
};

const ModalSlice = createSlice({
    name: "CUSTOMER_MODAL",
    initialState,
    reducers: {
        scanCustomerVisibleReducer: (state) => {
            state.scanCustomerVisible = !state.scanCustomerVisible;
        },
        customerDetailsVisibleReducer: (state) => {
            state.customerDetailsVisible = !state.customerDetailsVisible;
        },
        hideCustomerModalsReducer: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export const {
    scanCustomerVisibleReducer,
    customerDetailsVisibleReducer,
    hideCustomerModalsReducer,
} = ModalSlice.actions;

export default ModalSlice.reducer;
