import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_API_URL;

const instance = axios.create({ baseURL: API_URL });

instance.interceptors.request.use(
  function (config) {

    const token = JSON.parse(localStorage.getItem("INNOSCRIPTA_LOGIN") || "");
    if (token != "") {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response.data ? response.data : response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { instance };
