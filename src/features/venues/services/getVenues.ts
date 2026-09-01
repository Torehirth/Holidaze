import { API_VENUES_END_POINT } from "../constants/API";
import type { VenuesResponse } from "../types/venue";

const VENUES_PER_PAGE = 12;

export const getVenues = async (page = 1, query = ""): Promise<VenuesResponse> => {
  const encodedQuery = encodeURIComponent(query);

  const endpoint = query
    ? `${API_VENUES_END_POINT}/search?q=${encodedQuery}&page=${page}&limit=${VENUES_PER_PAGE}&sort=created&sortOrder=desc`
    : `${API_VENUES_END_POINT}?page=${page}&limit=${VENUES_PER_PAGE}&sort=created&sortOrder=desc`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors?.[0]?.message || "Failed to fetch venues.");
  }
  const venues = await response.json();
  return venues;
};
