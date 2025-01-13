import axios, { InternalAxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "/api/v1",
});

instance.interceptors.request.use(function (
  config: InternalAxiosRequestConfig,
) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

//
// const mockInstance = axios.create({
//   baseURL: "http://localhost:3000/api",
// });

const login = (data: { email: string; password: string }) => {
  return instance.post("/login", data);
};

const getBusinesses = () => {
  return instance.get("/business");
};

const getBusinessDetails = (id: number) => {
  return instance.get(`/business/${id}`);
};

export const api = {
  login,
  getBusinesses,
  getBusinessDetails,
};
