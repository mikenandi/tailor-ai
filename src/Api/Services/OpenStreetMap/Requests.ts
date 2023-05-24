import { axios } from "./Axios";

async function getLocationData(data: any) {
    try {
        let response = await axios({
            method: "GET",
            url: "/reverse/",
            params: {
                format: "json",
                lat: data.latitude,
                lon: data.longitude,
                zoom: 18,
                addressdetails: 1,
            },
        });

        return response.data;
    } catch (error) {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        if (error.code === "ERR_NETWORK") {
            return {
                // @ts-expect-error TS(2571): Object is of type 'unknown'.
                code: error.code,
                // @ts-expect-error TS(2571): Object is of type 'unknown'.
                message: error.message,
            };
        }
    }
}

export { getLocationData };
