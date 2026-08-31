import { API_LOGIN_ENDPOINT } from "../constants/API";
import type { LoginResponse, LoginData } from "../types/auth";

export const loginUser = async (userLoginData: LoginData): Promise<LoginResponse> => {
  const options = {
    method: "POST",
    headers: {
      "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userLoginData),
  };

  const response = await fetch(API_LOGIN_ENDPOINT, options);

  if (!response.ok) {
    const errorData = await response.json();
    const message = errorData?.errors?.[0]?.message || "Login failed!";
    throw new Error(message);
  }

  const result: LoginResponse = await response.json();
  return result;
};
