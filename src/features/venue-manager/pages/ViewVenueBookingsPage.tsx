import { ArrowLeft, MapPin } from "lucide-react";
import { Link, useParams } from "react-router";
import placeholderImage from "../../../shared/assets/images/placeholder.webp";
import { useEffect, useState } from "react";
import { getVenue } from "../../venues/services/getVenue";
import type { VenueWithDetails } from "../../venues/types/venue";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";
import { Loader } from "../../../shared/components/ui/Loader";
import { BookingViewCard } from "../components/BookingViewCard";
import { sortFutureBookingsByDate } from "../utils/sortFutureBookingsByDate";

export const ViewVenueBookingsPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [venue, setVenue] = useState<VenueWithDetails>();

  const { id } = useParams();

  useEffect(() => {
    const loadVenue = async () => {
      if (!id) {
        return;
      }

      try {
        setError(null);
        setLoading(true);

        const result = await getVenue(id);

        setVenue(result.data);
      } catch (caughtError) {
        if (caughtError instanceof Error) {
          setError(caughtError.message);
        } else {
          setError("Can't load the venue");
        }
      } finally {
        setLoading(false);
      }
    };
    loadVenue();
  }, [id]);

  if (!venue) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        {error && <FeedbackMessage variant="error" message={error} />}
        {loading && <Loader />}
      </div>
    );
  }

  const futureBookings = sortFutureBookingsByDate(venue);
  const nextCheckIn = futureBookings[0];

  return (
    <>
      <title>
        {venue.name ? `${venue.name} bookings | Holidaze` : "Venue bookings | Holidaze"}
      </title>
      <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Link to="/host" className="mb-6 inline-flex items-center gap-2 text-sm hover:opacity-70">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to venue management
        </Link>
        <section
          aria-labelledby="venue-heading"
          className="bg-card overflow-hidden rounded-2xl border border-gray-400 shadow-sm">
          <div className="grid md:grid-cols-[18rem_minmax(0,1fr)]">
            <img
              src={venue.media?.[0]?.url || placeholderImage}
              alt={venue.media?.[0]?.alt || `A view of ${venue.name}`}
              className="aspect-video h-full w-full object-cover md:aspect-auto"
            />
            <div className="from-accent to-background flex flex-col justify-center bg-linear-to-br p-6 sm:p-8">
              <p className="text-sm font-medium">Bookings for</p>
              <h1 id="venue-heading" className="mt-1 text-3xl font-medium">
                {venue.name}
              </h1>
              <p className="mt-3 flex items-center gap-2">
                <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
                {venue.location.city && venue.location.country
                  ? `${venue.location.city}, ${venue.location.country}`
                  : venue.location.city || venue.location.country || "Missing location"}
              </p>
            </div>
          </div>
        </section>
        <section aria-labelledby="summary-heading" className="mt-8">
          <h2 id="summary-heading" className="sr-only">
            Booking summary
          </h2>
          <dl className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
              <dt className="text-sm">Upcoming bookings</dt>
              <dd className="mt-1 text-3xl font-medium">{futureBookings.length}</dd>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <dt className="text-sm">Next check-in</dt>
              <dd className="mt-1 text-xl font-medium">
                {nextCheckIn
                  ? new Date(nextCheckIn.dateFrom).toLocaleDateString("nb-NO", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                  : "No upcoming bookings"}
              </dd>
            </div>
          </dl>
        </section>
        <section aria-labelledby="bookings-heading" className="mt-10">
          <div className="mb-5">
            <h2 id="bookings-heading" className="text-2xl font-medium">
              Upcoming bookings
            </h2>
            <p className="mt-1">Guests who are scheduled to stay at this venue.</p>
          </div>
          <ul className="space-y-5">
            {futureBookings.length > 0 ? (
              futureBookings.map((booking) => (
                <li key={booking.id}>
                  <BookingViewCard booking={booking} />
                </li>
              ))
            ) : (
              <p className="mx-auto mt-8 w-fit max-w-full text-lg">
                No upcoming bookings for this venue.
              </p>
            )}
          </ul>
        </section>
      </div>
    </>
  );
};
