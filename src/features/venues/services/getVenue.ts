import type { SingleVenueResponse } from "../types/venue";
import { API_VENUES_END_POINT } from "../constants/API";

export const getVenue = async (id: string): Promise<SingleVenueResponse> => {
  const singleVenueEndpoint = `${API_VENUES_END_POINT}/${id}?_owner=true&_bookings=true`;

  const response = await fetch(singleVenueEndpoint);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData?.errors?.[0]?.message || "Failed to fetch venue.");
  }

  const venue = await response.json();
  return venue;
};
