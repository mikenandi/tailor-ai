import {axios} from "./Axios";

interface IGetUser {
	authToken: string;
}

interface IUpdateProfile {
	name?: string;
	email?: string;
	phoneNumber?: string;
	isOwner?: string;
	licenseNo?: string;
	password?: string;
}

export const getUserProfile = async (inputs: IGetUser) => {
	try {
		let response = await axios({
			method: "GET",
			url: "/user",
			headers: {
				Authorization: `Bearer ${inputs.authToken}`,
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
			data: {...inputs},
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
