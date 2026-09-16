import { CalendarDays, Edit3, MapPin, Trash2, Users } from "lucide-react";
import { Link } from "react-router";
import placeholderImage from "../../../shared/assets/images/placeholder.webp";
import type { Venue } from "../../venues/types/venue";
import { useState } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";
import { Loader } from "../../../shared/components/ui/Loader";
import { deleteVenue } from "./../services/deleteVenue";
import { Button } from "../../../shared/components/ui/buttons/Button";

type VenueCardProps = {
  venues: Venue;
  onDeleted?: (id: string) => void;
};

export const MyVenueCard = ({ venues, onDeleted }: VenueCardProps) => {
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  const { currentUser } = useAuth();

  const handleDelete = async () => {
    if (!currentUser || !onDeleted) {
      return;
    }
    try {
      setLoading(true);
      setError(null);

      await deleteVenue(currentUser, venues.id);
      onDeleted(venues.id);
      setDisplayDeleteModal(false);
    } catch (caughtError) {
      if (caughtError instanceof Error) {
        setError(caughtError.message);
      } else {
        setError("Can't delete venue.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteButton = () => {
    setDisplayDeleteModal(true);
  };

  const handleCancelButton = () => {
    setDisplayDeleteModal(false);
  };

  return (
    <article className="bg-card focus-within:ring-foreground hover:ring-foreground/50 flex h-full flex-col overflow-hidden rounded-2xl capitalize shadow-sm transition-all focus-within:ring-2 hover:shadow-md hover:ring active:ring-2">
      <Link to={`/venues/${venues.id}`}>
        <div className="relative">
          <img
            src={venues.media?.[0]?.url || placeholderImage}
            alt={venues.media?.[0]?.alt || "Venue image"}
            className="aspect-4/3 w-full object-cover"
          />
          {error && <FeedbackMessage variant="error" message={error} />}
          {loading && <Loader />}
          <div className="flex flex-col px-5 py-4">
            <h3 className="overflow-hidden text-xl font-medium wrap-anywhere">{venues.name}</h3>
            <p className="mt-1 flex items-center gap-2 text-sm wrap-anywhere">
              <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
              {venues.location.city && venues.location.country
                ? `${venues.location.city}, ${venues.location.country}`
                : venues.location.city || venues.location.country || "Missing location"}
            </p>
          </div>
        </div>
      </Link>
      <div className="flex flex-1 flex-col px-5 py-4">
        <dl className="grid grid-cols-2 gap-3">
          <div>
            <dt className="text-muted-foreground text-xs">Price per night</dt>
            <dd className="mt-1 font-medium">{venues.price}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground text-xs">Maximum guests</dt>
            <dd className="mt-1 flex items-center gap-1.5 font-medium">
              <Users aria-hidden="true" className="h-4 w-4" />
              {venues.maxGuests}
            </dd>
          </div>
        </dl>
        <div className="mt-auto space-y-3 border-t border-gray-300 pt-5">
          <Link
            to={`/host/venues/${venues.id}/bookings`}
            className="bg-primary text-secondary flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition hover:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:ring-2">
            <CalendarDays aria-hidden="true" className="h-4 w-4" />
            View bookings
          </Link>
          <div className="grid grid-cols-2 gap-3">
            <Link
              to={`/host/venues/${venues.id}/edit`}
              className="border-foreground text-foreground flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition hover:opacity-60 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:ring-2">
              <Edit3 aria-hidden="true" className="h-4 w-4" />
              Edit
            </Link>
            <button
              type="button"
              onClick={handleDeleteButton}
              className="text-destructive flex items-center justify-center gap-2 rounded-xl border border-red-300 px-4 py-2.5 text-sm font-medium transition hover:bg-red-100 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none active:ring-2">
              <Trash2 aria-hidden="true" className="h-4 w-4" />
              Delete
            </button>
            {displayDeleteModal && (
              <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/50">
                <div className="bg-background flex w-full max-w-md flex-col gap-8 rounded-2xl p-6 shadow-md">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl">Delete Venue?</h2>
                    <p>Are you sure you delete this venue?</p>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="primary" onClick={handleCancelButton}>
                      Cancel
                    </Button>
                    <Button variant="destructive" disabled={loading} onClick={handleDelete}>
                      {loading ? "Deleting..." : "Delete"}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
