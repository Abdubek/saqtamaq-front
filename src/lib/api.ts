import axios from "axios";

const instance = axios.create({
  baseURL: "/api/v1",
});

const mockInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

const login = (data: { email: string; password: string }) => {
  return instance.post("/login", data);
};

const getProducts = () => {
  return mockInstance.get("/food-items");
};

export const api = {
  login,
  getProducts,
};
