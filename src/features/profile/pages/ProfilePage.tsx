import { MapPin, Plus } from "lucide-react";
import { Button } from "../../../shared/components/ui/buttons/Button";
import placeholderImage from "../../../shared/assets/images/placeholder.webp";
import { useAuth } from "./../../auth/hooks/useAuth";
import { BookedVenueSection } from "../components/BookedVenueSection";
import { UserSection } from "../components/UserSection";
import { getProfile } from "../services/getProfile";
import { useEffect, useState } from "react";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";
import type { User } from "../types/user";
import { Loader } from "../../../shared/components/ui/Loader";

export const ProfilePage = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      if (!currentUser) {
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const result = await getProfile(currentUser);
        console.log(result);
        setUser(result.data);
      } catch (caughtError) {
        if (caughtError instanceof Error) {
          setError(caughtError.message);
        } else {
          setError("Couldn't retrieve profile right now.");
        }
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, [currentUser]);

  return (
    <>
      <title>{`${currentUser?.userName}'s profile | Holidaze`}</title>
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="sr-only">My profile</h1>

        {loading && <Loader />}
        {error && <FeedbackMessage variant="error" message={error} />}

        {user && <UserSection user={user} />}
        <BookedVenueSection />

        {currentUser?.venueManager && (
          <section
            aria-labelledby="venues-heading"
            className="mt-12 border-t border-gray-300 pt-10">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 id="venues-heading" className="text-2xl font-medium">
                  Your venues
                </h2>
                <p className="mt-1">Create venues and manage your existing listings.</p>
              </div>

              <Button type="button" variant="primary">
                <Plus aria-hidden="true" className="h-4 w-4" />
                Create venue
              </Button>
            </div>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <li>
                <article className="bg-card overflow-hidden rounded-2xl border border-gray-400 shadow-sm transition hover:shadow-md">
                  <img
                    src={placeholderImage}
                    alt="Managed venue"
                    className="aspect-4/3 w-full object-cover"
                  />

                  <div className="p-5">
                    <h3 className="line-clamp-2 text-lg font-medium">Venue name</h3>
                    <p className="mt-2 flex items-center gap-2 text-sm">
                      <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
                      Voss, Norway
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3 border-t border-gray-300 pt-4">
                      <button
                        type="button"
                        className="text-primary text-sm font-medium hover:opacity-70">
                        Edit venue
                      </button>
                      <button
                        type="button"
                        className="text-primary text-sm font-medium hover:opacity-70">
                        View bookings
                      </button>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </section>
        )}
      </div>
    </>
  );
};
