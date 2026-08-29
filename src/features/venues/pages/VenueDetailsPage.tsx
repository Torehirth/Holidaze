import { Link, useParams } from "react-router";
import { getVenue } from "../services/getVenue";
import { useEffect, useState } from "react";
import type { Venue, VenueDetails } from "../types/venue";
import { Loader } from "../../../shared/components/ui/Loader";
import { ArrowLeft, Users } from "lucide-react";
import { BookingSection } from "../components/venueDetailsPage/BookingSection";
import { Facilities } from "../components/venueDetailsPage/Facilities";
import { HeadlineSection } from "../components/venueDetailsPage/HeadlineSection";
import { AboutSection } from "../components/venueDetailsPage/AboutSection";
import { HostSection } from "../components/venueDetailsPage/HostSection";
import { ImageSection } from "../components/venueDetailsPage/ImageSection";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";

export const VenueDetailsPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [venue, setVenue] = useState<(Venue & VenueDetails) | null>(null);
  const { id } = useParams<"id">();

  useEffect(() => {
    const loadVenue = async () => {
      if (!id) {
        setError("Venue ID is missing.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const result = await getVenue(id);
        setVenue(result.data);
      } catch (caughtError) {
        if (caughtError instanceof Error) {
          setError(caughtError.message);
        } else {
          setError(`Couldn't display venue with id: ${id}`);
        }
      } finally {
        setLoading(false);
      }
    };
    loadVenue();
  }, [id]);

  return (
    <>
      <title>{`${venue?.name ?? "Venue details"} | Holidaze`}</title>
      <div>{loading && <Loader />}</div>
      <div className="mx-auto mt-12 max-w-full px-8">
        {!loading && !venue && error && (
          <FeedbackMessage
            variant="error"
            title="Venue not found!"
            message="Please try again, or come back later."
          />
        )}
      </div>
      {!loading && !error && venue && (
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            to="/venues"
            className="mb-6 inline-flex items-center gap-2 text-sm hover:opacity-80">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to venues
          </Link>
          <section aria-labelledby="venue-heading">
            <ImageSection venue={venue} />
            <HeadlineSection venue={venue} />

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
              <article className="space-y-8">
                <div className="bg-card flex w-fit items-center gap-3 rounded-xl border border-gray-400 py-3 pr-6 pl-4">
                  <Users aria-hidden="true" className="h-5 w-5" />
                  <p className="font-medium">
                    Maximum guests: {venue.maxGuests || "Contact the owner"}
                  </p>
                </div>
                <AboutSection venue={venue} />
                <Facilities venue={venue} />
                <HostSection venue={venue} />
              </article>
              <BookingSection venue={venue} />
            </div>
          </section>
        </div>
      )}
    </>
  );
};
