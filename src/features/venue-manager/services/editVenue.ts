import { API_BASE_URL } from "../../auth/constants/API";
import type { AuthUser } from "../../auth/types/auth";
import type { VenuesResponse } from "../../venues/types/venue";
import type { VenueFormValues } from "../types/form";

export const editVenue = async (
  formData: VenueFormValues,
  user: AuthUser,
  id: string
): Promise<VenuesResponse> => {
  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
      "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const response = await fetch(`${API_BASE_URL}/holidaze/venues/${id}`, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.errors?.[0]?.message ||
        "Something went wrong with the request. Couldn't create venue at the moment."
    );
  }

  const venue = await response.json();
  return venue;
};
