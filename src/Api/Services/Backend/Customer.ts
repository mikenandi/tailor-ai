import { axios } from "./Axios";

interface ICustomer {
    name: string;
    mobile: string;
    gender: string;
    height: number;
    chest: number;
    shoulder: number;
    arm: number;
    leg: number;
    waist: number;
    waistToShoulder: number;
}

export const postCustomers = async (authToken: string, inputs: ICustomer) => {
    try {
        let response = await axios({
            method: "POST",
            url: "/customers",
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
            data: {
                ...inputs,
            },
        });

        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};

export const getCustomers = async (authToken: string) => {
    try {
        let response = await axios({
            method: "GET",
            url: "/customers",
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });

        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};

export const updateProfile = async (
    customerId: string,
    inputs: ICustomer,
    authToken: string
) => {
    try {
        let response = await axios({
            method: "PATCH",
            url: `/customers/${customerId}`,
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
            data: { ...inputs },
        });

        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};

export const deleteCustomer = async (customerId: string, authToken: string) => {
    try {
        let response = await axios({
            method: "DELETE",
            url: `/customers/${customerId}`,
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });

        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};
