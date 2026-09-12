import { MapPin, Star } from "lucide-react";
import type { VenueSectionProps } from "../../types/venue";

export const HeadlineSection = ({ venue }: VenueSectionProps) => {
  return (
    <>
      <header className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 id="venue-heading" className="text-2xl font-medium sm:text-3xl">
            {venue.name}
          </h1>
          <p className="mt-2 flex items-center gap-2">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            {[venue.location.city, venue.location.country].filter(Boolean).join(", ") ||
              "Missing location"}
          </p>
        </div>
        <div className="bg-accent flex w-fit items-center gap-1 rounded-full px-3 py-1.5">
          <Star aria-hidden="true" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{venue.rating}</span>
        </div>
      </header>
    </>
  );
};
