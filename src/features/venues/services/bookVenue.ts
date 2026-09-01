import { API_BOOKINGS_END_POINT } from "../constants/API";

export type BookVenueDataTypes = {
  accessToken: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  venueId: string;
};

export const bookVenue = async ({
  accessToken,
  dateFrom,
  dateTo,
  guests,
  venueId,
}: BookVenueDataTypes) => {
  const formData = {
    dateFrom: dateFrom,
    dateTo: dateTo,
    guests: guests,
    venueId: venueId,
  };

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const response = await fetch(API_BOOKINGS_END_POINT, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors?.[0]?.message || "Failed to send booking data ");
  }

  const booking = await response.json();
  return booking;
};
