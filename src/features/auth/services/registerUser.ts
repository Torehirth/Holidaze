import { API_REGISTER_ENDPOINT } from "../constants/API";
import type { RegisterResponse, RegistrationData } from "../types/auth";

export const registerUser = async (
  userRegData: RegistrationData
): Promise<RegisterResponse> => {
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

  console.log("registerUser: ", result);
  return result.data;
};
