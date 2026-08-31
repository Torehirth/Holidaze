import { API_REGISTER_ENDPOINT } from "../constants/API";
import type { RegistrationData } from "../types/auth";

export const registerUser = async (userRegData: RegistrationData): Promise<void> => {
  const options = {
    method: "POST",
    headers: {
      "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userRegData),
  };

  const response = await fetch(API_REGISTER_ENDPOINT, options);

  if (!response.ok) {
    const errorData = await response.json();
    const message =
      errorData?.errors?.[0]?.message || "Failed to send registration data.";
    throw new Error(message);
  }

  const result = await response.json();
  return result;
};
