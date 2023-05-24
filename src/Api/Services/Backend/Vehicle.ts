import {axios} from "./Axios";

export interface IPostVehicle {
	make: string;
	model: string;
	modelYear: string;
	bodyType: string;
	fuelType: string;
	chassisNumber: string;
	plateNumber: string;
	engineType: string;
}

export interface IUpdateVehicle {
	make: string;
	model: string;
	modelYear: string;
	bodyType: string;
	fuelType: string;
	chassisNumber: string;
	plateNumber: string;
	engineType: string;
}

export const postVehicle = async (inputs: IPostVehicle, authToken: string) => {
	try {
		let response = await axios({
			method: "POST",
			url: "/vehicle",
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

export const getVehicles = async (authToken: string, plateNumber?: string) => {
	try {
		let response = await axios({
			method: "GET",
			url: "/vehicle/vehicles",
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
			params: {
				plateNumber,
			},
		});

		return response.data;
	} catch (error: any) {
		return error.response.data;
	}
};

export const getVehicle = async (authToken: string, vehicleId: number) => {
	try {
		let response = await axios({
			method: "GET",
			url: `/vehicle/${vehicleId}`,
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		});

		return response.data;
	} catch (error: any) {
		return error.response.data;
	}
};

export const deleteVehicle = async (
	authToken: string,
	vehicleId: number | undefined
) => {
	try {
		let response = await axios({
			method: "DELETE",
			url: `/vehicle/${vehicleId}`,
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		});

		return response.data;
	} catch (error: any) {
		return error.response.data;
	}
};

export const updateVehicle = async (
	authToken: string,
	vehicleId: number | undefined,
	inputs: IUpdateVehicle
) => {
	try {
		let response = await axios({
			method: "PATCH",
			url: `/vehicle/${vehicleId}`,
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
