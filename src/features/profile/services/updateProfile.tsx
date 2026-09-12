import { API_BASE_URL } from "../../auth/constants/API";
import type { AuthUser } from "../../auth/types/auth";
import type { ProfileResponse, UpdateProfileData } from "../types/update";

export const updateProfile = async (
  user: AuthUser,
  formData: UpdateProfileData
): Promise<ProfileResponse> => {
  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
      "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const response = await fetch(`${API_BASE_URL}/holidaze/profiles/${user.userName}`, options);

  if (!response.ok) {
    const responseData = await response.json();
    throw new Error(responseData.errors?.[0]?.message || "Couldn't update profile right now.");
  }

  const result = await response.json();
  return result;
};
