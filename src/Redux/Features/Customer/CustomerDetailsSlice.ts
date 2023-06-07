import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICustomer {
    name: string;
    mobile: string;
    gender: string;
    chest: string;
    waist: string;
    hips: string;
    shoulder: string;
    neck: string;
    arm: string;
    bicep: string;
}

interface CustomerDetailsState {
    customer: ICustomer;
    customers: ICustomer[];
}

const initialState: CustomerDetailsState = {
    customers: [],
    customer: {
        name: "",
        mobile: "",
        gender: "",
        chest: "12 Inch",
        waist: "12 Inch",
        hips: "12 Inch",
        shoulder: "12 Inch",
        neck: "12 Inch",
        arm: "12 Inch",
        bicep: "12 Inch",
    },
};

const CustomerDetailsSlice = createSlice({
    name: "CUSTOMER_DETAILS_SLICE",
    initialState,
    reducers: {
        saveMeasurementsReducer: (
            state,
            actions: PayloadAction<{ name: string; value: string }>
        ) => {
            state.customer = {
                ...state.customer,
                [actions.payload.name]: actions.payload.value,
            };
        },
        saveCustomerReducer: (state) => {
            state.customers.push({ ...state.customer });

            Object.assign(state.customer, initialState.customer);
        },
        deleteCustomerReducer: (state, actions: PayloadAction<number>) => {
            state.customers = state.customers.filter(
                (_, index) => index !== actions.payload
            );
        },
    },
});

export const {
    saveMeasurementsReducer,
    saveCustomerReducer,
    deleteCustomerReducer,
} = CustomerDetailsSlice.actions;

export default CustomerDetailsSlice.reducer;
