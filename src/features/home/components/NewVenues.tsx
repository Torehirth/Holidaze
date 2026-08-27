import { useEffect, useState } from "react";
import { VenueCard } from "../../../shared/components/ui/VenueCard";
import type { Venue } from "../../../shared/types/venue";
import { getVenues } from "../../venues/services/getVenues";
import { Loader } from "../../../shared/components/ui/Loader";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";

export const NewVenues = () => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVenues = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getVenues();

        setVenues(result.data.slice(0, 4));
      } catch (caughtError) {
        if (caughtError instanceof Error) {
          setError(caughtError.message);
        } else {
          setError("Couldn't display venues.");
        }
      } finally {
        setLoading(false);
      }
    };
    loadVenues();
  }, []);
  return (
    <section className="-my-8 px-12 lg:my-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4">
          <h2 className="text-xl font-medium">New Stays</h2>
          <p>Discover new places for your next getaway</p>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:overflow-visible">
          {loading && (
            <div className="flex w-full justify-center">
              <Loader />
            </div>
          )}
          {error && (
            <FeedbackMessage
              variant="error"
              title="Loading venues failed"
              message={error}
            />
          )}
          {!error && !loading && (
            <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible">
              {venues.map(
                ({
                  id,
                  name,
                  description,
                  price,
                  media,
                  rating,
                  location,
                  maxGuests,
                }) => (
                  <li
                    key={id}
                    className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-auto">
                    <VenueCard
                      id={id}
                      name={name}
                      description={description}
                      price={price}
                      imageURL={media[0]?.url}
                      imageAlt={media[0]?.alt}
                      rating={rating}
                      city={location.city}
                      country={location.country}
                      guests={maxGuests}
                    />
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
