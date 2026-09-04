import { API_BASE_URL } from "../../auth/constants/API";
import type { AuthUser } from "../../auth/types/auth";
import type { UserResponse } from "../types/user";

export const getProfile = async (user: AuthUser): Promise<UserResponse> => {
  if (!user) {
    throw new Error("Couldn't find user.");
  }

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
      "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `${API_BASE_URL}/holidaze/profiles/${user.userName}?_bookings=true&_venues=true`,
    options
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors?.[0]?.message || "Couldn't fetch profile at this point. ");
  }

  const profile = response.json();
  return profile;
};
