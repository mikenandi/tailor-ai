import Axios from "axios";

const axios = Axios.create({
	baseURL: "https://breakdown-alert.onrender.com",
	timeout: 5000,
});

export {axios};
