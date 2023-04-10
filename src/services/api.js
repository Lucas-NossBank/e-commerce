import axios from "axios";

const api = axios.create({
  baseURL: "http://nmp-backend-dev-1273596035.us-east-2.elb.amazonaws.com/",
});

export default api;