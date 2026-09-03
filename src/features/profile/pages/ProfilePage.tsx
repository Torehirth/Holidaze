import { Edit3, LogOut, MapPin, Plus } from "lucide-react";
import { Button } from "../../../shared/components/ui/buttons/Button";
import placeholderImage from "../../../shared/assets/images/placeholder.webp";
import profilePlaceholderImage from "../../../shared/assets/images/placeholder_profile.webp";
import { useAuth } from "./../../auth/hooks/useAuth";
import { BookedVenueSection } from "../components/BookedVenueSection";

export const ProfilePage = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <title>{`${currentUser?.userName}'s profile | Holidaze`}</title>
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="sr-only">My profile</h1>

        <section
          aria-labelledby="profile-heading"
          className="bg-card overflow-hidden rounded-2xl border border-gray-400 shadow-sm">
          <div className="from-primary/80 to-primary h-40 bg-linear-to-r sm:h-56" />

          <div className="p-5 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="bg-card w-fit rounded-full border border-gray-300 p-1.5 shadow-sm">
                <img
                  src={profilePlaceholderImage}
                  alt="Profile avatar"
                  className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
                />
              </div>

              <div>
                <h2 id="profile-heading" className="text-2xl font-semibold">
                  Username
                </h2>
                <p className="">user@stud.noroff.no</p>
                <span className="bg-accent mt-2 inline-block rounded-full px-3 py-1 text-sm font-medium">
                  {currentUser?.venueManager ? "Venue manager" : "Customer"}
                </span>
              </div>
            </div>

            <div className="mt-6 max-w-2xl border-t border-gray-300 pt-5">
              <h3 className="font-medium">About</h3>
              <p className="mt-2 leading-relaxed">
                A short profile bio will appear here. Tell hosts and guests a little about yourself.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-gray-300 pt-5 sm:flex-row sm:justify-end">
              <Button type="button" variant="secondary">
                <Edit3 aria-hidden="true" className="h-4 w-4" />
                Edit profile
              </Button>
              <Button type="button" variant="secondary">
                <LogOut aria-hidden="true" className="h-4 w-4" />
                Log out
              </Button>
            </div>
          </div>
        </section>

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
      </main>
    </>
  );
};
