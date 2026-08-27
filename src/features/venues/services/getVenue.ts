import type { SingleVenueResponse } from "../../../shared/types/venue";
import { API_VENUES_END_POINT } from "./../../../shared/constants/API";

export const getVenue = async (id: string): Promise<SingleVenueResponse> => {
  const singleVenueEndpoint = `${API_VENUES_END_POINT}/${id}?_owner=true&_bookings=true`;

  const response = await fetch(singleVenueEndpoint);

  if (!response.ok) {
    const errorData = await response.json();
    const message = errorData?.errors?.[0]?.message || "Failed to fetch venue.";
    throw new Error(message);
  }

  const venue = await response.json();
  console.log(venue);

  return venue;
};
