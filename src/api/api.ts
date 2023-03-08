import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-43-200-255-169.ap-northeast-2.compute.amazonaws.com:80",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
