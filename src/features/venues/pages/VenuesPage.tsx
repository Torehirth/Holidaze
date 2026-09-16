import { useEffect, useState } from "react";
import { VenueCard } from "../../../shared/components/ui/VenueCard";
import type { PaginationMeta, Venue } from "../types/venue";
import { getVenues } from "../services/getVenues";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";
import { Loader } from "../../../shared/components/ui/Loader";
import { Button } from "../../../shared/components/ui/buttons/Button";
import { useSearchParams } from "react-router";
import { ButtonLink } from "../../../shared/components/ui/buttons/ButtonLink";
import { VenuesSearchForm } from "../../../shared/components/forms/search/VenuesSearchForm";

export const VenuesPage = () => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState<PaginationMeta | null>(null);
  const [page, setPage] = useState<number>(1);
  const [searchParam] = useSearchParams();

  const query = searchParam.get("q") ?? "";

  const noSearchResults = !loading && !error && query !== "" && meta?.totalCount === 0;
  const notFoundMessage = `No venues found for "${query}". Try another search.`;

  const handleLoadMore = () => {
    if (loading) return;

    setPage((pageNumber) => pageNumber + 1);
  };

  useEffect(() => {
    const loadVenues = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getVenues(page, query);

        setVenues((currentVenues) =>
          page === 1 ? result.data : [...currentVenues, ...result.data]
        );

        setMeta(result.meta);
      } catch (caughtError) {
        if (caughtError instanceof Error) {
          setError(caughtError.message);
        } else {
          setError("Couldn't display venues. Try again later.");
        }
      } finally {
        setLoading(false);
      }
    };
    loadVenues();
  }, [page, query]);

  return (
    <>
      <title>All venues | Holidaze</title>
      <meta
        name="description"
        content="Explore all available venues on Holidaze — filter by location, price and amenities."
      />
      <link rel="canonical" href="https://tmh-holidaze.netlify.app/venues" />
      <meta property="og:title" content="All venues | Holidaze" />
      <meta property="og:description" content="Explore all available venues on Holidaze." />
      <meta property="og:image" content="https://tmh-holidaze.netlify.app/default_meta_og.jpg" />
      <meta property="og:url" content="https://tmh-holidaze.netlify.app/venues" />

      <section className="mx-auto w-full max-w-7xl px-4 py-2 pb-12 sm:px-6 lg:px-8 lg:py-6">
        <header className="mb-8">
          <VenuesSearchForm variant="secondary" />
          <h1 className="text-2xl font-medium lg:mt-4">Explore venues</h1>
          <p className="mt-2">Find the perfect place for your next stay.</p>
          <div>
            {!error && !loading && meta && (
              <p className="mt-2 text-sm">{meta?.totalCount} properties found</p>
            )}
          </div>
        </header>
        <div>
          {noSearchResults && (
            <div className="flex flex-col items-center justify-center">
              <div className="w-fit">
                <FeedbackMessage
                  variant="warning"
                  title="No venues found"
                  message={notFoundMessage}
                />
              </div>
              <div className="mt-4 flex justify-center">
                <ButtonLink to="/" variant="primary">
                  Search again
                </ButtonLink>
              </div>
            </div>
          )}
          {loading && !error && venues.length === 0 && <Loader />}
          {error && (
            <FeedbackMessage variant="error" title="Loading venues failed" message={error} />
          )}
          {venues.length > 0 && (
            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {venues.map(
                ({ id, name, description, price, media, rating, location, maxGuests }) => (
                  <li key={id}>
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
          {meta && !meta.isLastPage && !error && (
            <div className="flex justify-center">
              <div className="w-fit py-8">
                <Button variant="secondary" onClick={handleLoadMore} disabled={loading}>
                  {loading ? "Loading..." : "Load more"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
