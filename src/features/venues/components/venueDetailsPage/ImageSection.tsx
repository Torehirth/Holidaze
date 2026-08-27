import type { VenueSectionProps } from "../../../../shared/types/venue";
import placeholderImage from "../../../../shared/assets/images/placeholder.webp";

export const ImageSection = ({ venue }: VenueSectionProps) => {
  return (
    <div>
      <img
        src={venue.media?.[0]?.url ?? placeholderImage}
        alt={venue.media?.[0]?.alt ?? "Venue placeholder"}
        className="aspect-4/3 max-h-136 w-full rounded-2xl object-cover sm:aspect-video"
      />
    </div>
  );
};
