import { LoginForm } from "@/types/Login.types";
import axios from "../axios";

export const Login = async (payload: LoginForm) => {
  return await axios.post("/auth/login", payload);
};
