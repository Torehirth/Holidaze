import { CalendarDays, MapPin, Users } from "lucide-react";
import placeholderImage from "../../../shared/assets/images/placeholder.webp";
import { Link } from "react-router";
import type { BookedVenueCardProps } from "../types/bookings";
import { formatDate } from "../../../shared/utils/formatDate";

export const BookedVenueCard = ({
  currentDate,
  venueId,
  imageUrl,
  imageAlt,
  venueName,
  dateFrom,
  dateTo,
  guests,
  city,
  country,
}: BookedVenueCardProps) => {
  const location = [city, country].filter(Boolean).join(", ");
  const currentTimeStamp = currentDate.getTime();
  const startTimeStamp = Date.parse(dateFrom);
  const endTimeStamp = Date.parse(dateTo);
  const isGoingOn = currentTimeStamp >= startTimeStamp && currentTimeStamp <= endTimeStamp;

  return (
    <>
      <Link to={`/venues/${venueId}`}>
        <article className="bg-card overflow-hidden rounded-2xl border border-gray-400 shadow-sm transition hover:shadow-md sm:flex">
          <div className="aspect-4/3 w-full shrink-0 overflow-hidden sm:w-44">
            <img
              src={imageUrl || placeholderImage}
              alt={imageAlt || `image of ${venueName}`}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col p-5">
            <div className="flex items-center justify-between">
              <h3 className="mt-1 line-clamp-2 max-w-4/6 text-lg font-medium text-ellipsis whitespace-nowrap">
                {venueName}
              </h3>

              {isGoingOn ? (
                <p
                  className="bg-accent w-fit rounded-2xl px-2 py-1 text-sm font-medium"
                  aria-label="Ongoing stay">
                  Ongoing
                </p>
              ) : (
                <p
                  className="w-fit rounded-2xl bg-green-200 px-2 py-1 text-sm font-medium"
                  aria-label="Upcoming stay">
                  Upcoming
                </p>
              )}
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <CalendarDays aria-hidden="true" className="h-4 w-4 shrink-0" />
                {`${formatDate(new Date(dateFrom))} - ${formatDate(new Date(dateTo))}`}
              </p>
              <p className="flex items-center gap-2">
                <Users aria-hidden="true" className="h-4 w-4 shrink-0" />
                {guests} Guests
              </p>
              <p className="flex items-center gap-2">
                <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
                {location || "Missing location"}
              </p>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};
