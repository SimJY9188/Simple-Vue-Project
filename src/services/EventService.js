import axios from "axios";

const apiClient = axios.create({
   baseURL: "http://www.mocky.io",
   withCredentials: false,
   headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
   },
});

export default {
   getManager() {
      return apiClient.get("/v2/5d73bf3d3300003733081869");
   },
};
