import axios from "axios";

const api = axios.create({
  baseURL: "https://ec2-3-39-28-20.ap-northeast-2.compute.amazonaws.com:80",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
