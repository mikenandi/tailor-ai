import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://tailor-api.onrender.com",
    timeout: 5000,
});

export { axios };
