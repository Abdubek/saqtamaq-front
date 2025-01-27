import axios, { InternalAxiosRequestConfig } from "axios";

export const STORAGE_TOKEN_KEY = "token";

console.log(import.meta.env.NODE_ENV);

export const instance = axios.create({
  baseURL: `${import.meta.env.PROD ? import.meta.env.VITE_API_BASE : ""}/api/v1/`,
});

instance.interceptors.request.use(function (
  config: InternalAxiosRequestConfig,
) {
  const token = localStorage.getItem(STORAGE_TOKEN_KEY);
  if (token) {
    config.headers["Authorization"] = `Bearer ${token?.replaceAll('"', "")}`;
  }
  return config;
});
