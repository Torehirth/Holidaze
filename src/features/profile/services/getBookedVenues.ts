import { API_BASE_URL } from "../../auth/constants/API";
import type { AuthUser } from "../../auth/types/auth";
import type { BookedVenueResponse } from "../types/profile";

export const getBookedVenues = async (user: AuthUser): Promise<BookedVenueResponse> => {
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
    `${API_BASE_URL}/holidaze/profiles/${user.userName}/bookings?_customer=true&_venue=true&limit=100`,
    options
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors?.[0]?.message || "Couldn't fetch the user's venue(s)");
  }

  const bookedVenues = await response.json();
  return bookedVenues;
};
