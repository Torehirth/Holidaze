import type { Venue } from "../../venues/types/venue";

export const sortFutureBookingsByDate = (venue: Venue) => {
  const todayDateString = new Date().toISOString();
  const todayTimeStamp = Date.parse(todayDateString);

  const sortedFutureBookingsByDate = venue.bookings
    .filter((date) => Date.parse(date.dateFrom) > todayTimeStamp)
    .sort((a, b) => {
      return Date.parse(a.dateFrom) - Date.parse(b.dateFrom);
    });
  return sortedFutureBookingsByDate;
};
