import { API_BASE_URL } from "../../auth/constants/API";
import type { AuthUser } from "../../auth/types/auth";
import type { VenuesResponse } from "../../venues/types/venue";

export const getVenuesByProfile = async (profile: AuthUser): Promise<VenuesResponse> => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${profile.accessToken}`,
      "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    `${API_BASE_URL}/holidaze/profiles/${profile.userName}/venues?_owner=true&_bookings=true`,
    options
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData?.errors?.[0]?.message || "Couldn't fetch venues by profile at the moment."
    );
  }

  const venuesObj = await response.json();
  return venuesObj;
};
