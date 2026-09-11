import { API_BASE_URL } from "../../auth/constants/API";
import type { AuthUser } from "../../auth/types/auth";
import type { BookedVenueResponse } from "../types/bookings";

type GetBookedVenuesProps = {
  user: AuthUser;
  profileName: string;
};

export const getBookedVenues = async ({
  user,
  profileName,
}: GetBookedVenuesProps): Promise<BookedVenueResponse> => {
  if (!user) {
    throw new Error("Couldn't find user.");
  }

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
      "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
    },
  };
  const response = await fetch(
    `${API_BASE_URL}/holidaze/profiles/${profileName}/bookings?_customer=true&_venue=true&limit=100`,
    options
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors?.[0]?.message || "Couldn't fetch the user's venue(s)");
  }

  const bookedVenues = await response.json();
  return bookedVenues;
};
