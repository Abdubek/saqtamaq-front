import { instance } from "./config.ts";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

function login(data: LoginRequest) {
  return instance.post<LoginResponse>("/login", data);
}

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  id: number;
  email: string;
  username: string;
  role: "client" | "business_admin";
  created_at: Date;
}

function register(data: RegisterRequest) {
  return instance.post<RegisterResponse>("/register", data);
}

export const auth = {
  login,
  register,
};
