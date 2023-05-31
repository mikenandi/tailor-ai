import { AxiosError } from "axios";
import { axios } from "./Axios";

interface ISignup {
    name: string;
    email: string;
    password: string;
}

interface ISignin {
    email: string;
    password: string;
}

export const signin = async (data: ISignin) => {
    try {
        let response = await axios({
            method: "POST",
            url: "/auth/signin",
            data: data,
        });

        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};

export const signup = async (data: ISignup) => {
    try {
        let response = await axios({
            method: "POST",
            url: "/auth/signup",
            data: data,
        });

        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};
