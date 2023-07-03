import { axios } from "./Axios";

export const predictMeasurements = async (height: number, imageFile: any) => {
    try {
        const formData = new FormData();
        formData.append("image", imageFile);

        // Make the POST request using Axios
        let response = await axios({
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            url: `/api/v1/predict-measurements?height=${height}`,
            data: formData,
        });

        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};
