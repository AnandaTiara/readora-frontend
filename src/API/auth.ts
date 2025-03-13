import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://be-intern.bccdev.id/jevon/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;