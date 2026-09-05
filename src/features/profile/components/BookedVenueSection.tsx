import { BookedVenueCard } from "./BookedVenueCard";
import { useAuth } from "../../auth/hooks/useAuth";
import { useEffect, useState } from "react";
import { getBookedVenues } from "../services/getBookedVenues";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";
import { Loader } from "../../../shared/components/ui/Loader";
import type { BookedVenueResponse } from "../types/bookings";

export const BookedVenueSection = () => {
  const { currentUser } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [bookedVenues, setBookedVenues] = useState<BookedVenueResponse | null>(null);
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    const loadBookedVenues = async () => {
      if (!currentUser) {
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const result = await getBookedVenues(currentUser);
        setBookedVenues(result);
        setCurrentDate(new Date());
      } catch (caughtError) {
        if (caughtError instanceof Error) {
          setError(caughtError.message);
        } else {
          setError("Couldn't load venues at this point.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadBookedVenues();
  }, [currentUser]);

  if (!currentDate) {
    return;
  }

  const currentTimeStamp = currentDate?.getTime();

  const upcomingBookings =
    currentTimeStamp === undefined
      ? []
      : (bookedVenues?.data
          .filter((booking) => new Date(booking.dateTo) > currentDate)
          .sort(
            (firsBooking, lastBooking) =>
              Date.parse(firsBooking.dateFrom) - Date.parse(lastBooking.dateFrom)
          ) ?? []);

  return (
    <section aria-labelledby="bookings-heading" className="mt-12 border-t border-gray-300 pt-10">
      <div className="mb-5">
        <h2 id="bookings-heading" className="text-2xl font-medium">
          Upcoming stays
        </h2>
        <p className="mt-1">Your current confirmed bookings and info</p>
      </div>
      {loading && <Loader />}
      {error && <FeedbackMessage variant="error" message={error} />}

      {!loading &&
        !error &&
        currentDate &&
        (upcomingBookings.length > 0 ? (
          <ul className="grid gap-6 md:grid-cols-2">
            {upcomingBookings.map((booking) => (
              <li key={booking.id}>
                <BookedVenueCard
                  currentDate={currentDate}
                  venueId={booking.venue.id}
                  imageUrl={booking.venue.media[0]?.url}
                  imageAlt={booking.venue.media[0]?.alt}
                  venueName={booking.venue.name}
                  dateFrom={booking.dateFrom}
                  dateTo={booking.dateTo}
                  guests={booking.guests}
                  city={booking.venue.location.city}
                  country={booking.venue.location.country}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="bg-card rounded-xl border border-gray-400 p-6 text-center">
            You have no upcoming bookings.
          </p>
        ))}
    </section>
  );
};
