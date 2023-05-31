import { axios } from "./Axios";

interface IGetUser {
    authToken: string;
}

interface IUpdateProfile {
    name?: string;
    email?: string;
    phoneNumber?: string;
    oldPassword?: string;
    password?: string;
}

export const getUserProfile = async (authToken: string) => {
    try {
        let response = await axios({
            method: "GET",
            url: "/user",
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
    inputs: IUpdateProfile,
    authToken: string
) => {
    try {
        let response = await axios({
            method: "PATCH",
            url: "/user",
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

export const deleteUser = async (authToken: string) => {
    try {
        let response = await axios({
            method: "DELETE",
            url: "/user",
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });

        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};
