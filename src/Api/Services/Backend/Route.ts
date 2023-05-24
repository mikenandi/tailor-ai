import {axios} from "./Axios";

export const postRoute = async (vehicleId: string, authToken: string) => {
	try {
		let response = await axios({
			method: "POST",
			url: "/route",
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
			data: {
				vehicleId,
			},
		});

		return response.data;
	} catch (error: any) {
		return error.response.data;
	}
};

export const getRoutes = async (authToken: string) => {
	try {
		let response = await axios({
			method: "GET",
			url: "/route/routes",
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		});

		return response.data;
	} catch (error: any) {
		return error.response.data;
	}
};
