import { CalendarCheck, CalendarDays, House, Plus } from "lucide-react";
import { Link } from "react-router";
import { MyVenueCard } from "../components/MyVenueCard";
import { useEffect, useState } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";
import { Loader } from "../../../shared/components/ui/Loader";
import { getVenuesByProfile } from "../services/getVenuesByProfile";
import type { Venue } from "../../venues/types/venue";
import { getNextCheckIn } from "../utils/getNextCheckIn";

export const VenueManagerPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [venues, setVenues] = useState<Venue[]>([]);
  const { currentUser } = useAuth();

  const nextCheckIn = getNextCheckIn(venues);

  useEffect(() => {
    const loadUserVenues = async () => {
      if (!currentUser) {
        return;
      }

      try {
        setError(null);
        setLoading(true);

        const venuesObj = await getVenuesByProfile(currentUser);
        setVenues(venuesObj.data);
      } catch (caughtError) {
        if (caughtError instanceof Error) {
          setError(caughtError.message);
        } else {
          setError("Could not load the your venues at the moment.");
        }
      } finally {
        setLoading(false);
      }
    };
    loadUserVenues();
  }, [currentUser]);

  return (
    <>
      <title>Manage venues | Holidaze</title>
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {error && <FeedbackMessage variant="error" message={error} />}
        {loading && <Loader />}
        <section
          aria-labelledby="dashboard-heading"
          className="to-accent from-background overflow-hidden rounded-2xl border border-amber-200 bg-linear-to-br p-6 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="bg-primary/10 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl">
                <House aria-hidden="true" className="text-primary h-6 w-6" />
              </div>
              <p className="text-sm font-medium">Venue manager</p>
              <h1 id="dashboard-heading" className="mt-1 text-3xl font-medium">
                Manage your venues
              </h1>
              <p className="mt-2 max-w-2xl">
                Create new venues, update your listings and keep track of upcoming guests.
              </p>
            </div>
            <Link
              to="/host/venues/create"
              className="bg-primary text-background inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium transition hover:opacity-80 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none">
              <Plus aria-hidden="true" className="h-4 w-4" />
              Create venue
            </Link>
          </div>
        </section>
        <section aria-labelledby="overview-heading" className="mt-8">
          <h2 id="overview-heading" className="sr-only">
            Venue overview
          </h2>
          <dl className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-200">
                <House aria-hidden="true" className="h-5 w-5" />
              </div>
              <dt className="text-sm">Your venues</dt>
              <dd className="mt-1 text-3xl font-medium">{venues.length}</dd>
            </div>
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-200">
                <CalendarDays aria-hidden="true" className="h-5 w-5" />
              </div>
              <dt className="text-sm">Upcoming bookings</dt>
              <dd className="mt-1 text-3xl font-medium">
                {venues.reduce((sum, venue) => sum + venue.bookings.length, 0)}
              </dd>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-200">
                <CalendarCheck aria-hidden="true" className="h-5 w-5" />
              </div>
              <dt className="text-sm">Next check-in</dt>
              <dd className="mt-1 text-xl font-medium">{nextCheckIn}</dd>
            </div>
          </dl>
        </section>
        <section aria-labelledby="venues-heading" className="mt-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="venues-heading" className="text-2xl font-medium">
                Your venues
              </h2>
              <p className="mt-1">View and manage all the venues you have created.</p>
            </div>
            <Link
              to="/host/venues/create"
              className="text-primary inline-flex items-center gap-2 text-sm font-medium hover:opacity-70">
              <Plus aria-hidden="true" className="h-4 w-4" />
              Add another venue
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {venues.map((venue) => (
              <li key={venue.id}>
                <MyVenueCard venues={venue} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};
