import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICustomer {
    name: string;
    mobile: string;
    gender: string;
    height: string;
    chest: String;
    shoulder: string;
    arm: string;
    leg: string;
    waist: string;
    waistToShoulder: string;
    tailorId: string;
}

interface ICustomerData {
    id: string;

    name: string;
    mobile: string;
    gender: string;
    height: number;
    chest: String;
    shoulder: number;
    arm: number;
    leg: number;
    waist: number;
    waistToShoulder: number;
    tailorId: string;

    createdAt: string;
    updatedAt: string;
}

interface CustomerDetailsState {
    customer: ICustomer;
    customers: ICustomerData[];
    reload: boolean;
}

const initialState: CustomerDetailsState = {
    customers: [],
    customer: {
        name: "",
        mobile: "",
        gender: "",
        height: "",
        chest: "",
        shoulder: "",
        arm: "",
        leg: "",
        waist: "",
        waistToShoulder: "",
        tailorId: "",
    },
    reload: false,
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
            // state.customers.push({ ...state.customer });
            // Object.assign(state.customer, initialState.customer);
        },
        deleteCustomerReducer: (state) => {
            // state.customers = state.customers.filter(
            //     (_, index) => index !== actions.payload
            // );

            Object.assign(state.customer, initialState.customer);
        },
        savePredictions: (
            state,
            actions: PayloadAction<{
                arm_length: string;
                leg_length: string;
                shoulder_width: string;
                waist: string;
                waist_to_shoulder_length: string;
            }>
        ) => {
            state.customer.shoulder = actions.payload.shoulder_width;
            state.customer.arm = actions.payload.arm_length;
            state.customer.leg = actions.payload.leg_length;
            state.customer.waist = actions.payload.waist;
            state.customer.waistToShoulder =
                actions.payload.waist_to_shoulder_length;
        },
        saveCustomersReducer: (
            state,
            actions: PayloadAction<ICustomerData[]>
        ) => {
            state.customers = actions.payload;
        },
        reloadReducer: (state) => {
            state.reload = !state.reload;
        },
    },
});

export const {
    saveMeasurementsReducer,
    saveCustomerReducer,
    deleteCustomerReducer,
    savePredictions,
    saveCustomersReducer,
    reloadReducer,
} = CustomerDetailsSlice.actions;

export default CustomerDetailsSlice.reducer;
