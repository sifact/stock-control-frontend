import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://product-management-backend.vercel.app/api/",
  withCredentials: true,
});

export default newRequest;
