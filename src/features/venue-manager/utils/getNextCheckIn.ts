import type { Venue } from "../../venues/types/venue";

export const getNextCheckIn = (venues: Venue[]) => {
  const sortedDates = venues
    .flatMap((venue) => venue.bookings)
    .map((booking) => booking.dateFrom)
    .filter((date) => Date.parse(date) > Date.now())
    .sort((a, b) => Date.parse(a) - Date.parse(b));

  const nearestDate = sortedDates[0];

  if (!nearestDate) {
    return;
  }

  return new Date(nearestDate).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "2-digit",
  });
};
