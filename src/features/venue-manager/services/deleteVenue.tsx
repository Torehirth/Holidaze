import { API_BASE_URL } from "../../auth/constants/API";
import type { AuthUser } from "../../auth/types/auth";

export const deleteVenue = async (user: AuthUser, id: string): Promise<void> => {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
      "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${API_BASE_URL}/holidaze/venues/${id}`, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors?.[0]?.message || "Could not delete the venue");
  }
};
