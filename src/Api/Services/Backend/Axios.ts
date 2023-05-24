import Axios from "axios";

const axios = Axios.create({
	baseURL: "https://breakdown-alert.onrender.com",
	timeout: 9000,
});

export {axios};
