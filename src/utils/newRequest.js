import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://product-management-backend.vercel.app/api/",
  // baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});

export default newRequest;
