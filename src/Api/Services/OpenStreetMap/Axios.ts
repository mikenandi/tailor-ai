import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://nominatim.openstreetmap.org",
    timeout: 9000,
});

export { axios };
