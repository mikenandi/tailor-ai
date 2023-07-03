import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://fast-tailor-production.up.railway.app/",
});

export { axios };
