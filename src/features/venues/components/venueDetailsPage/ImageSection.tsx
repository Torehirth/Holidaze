import type { VenueSectionProps } from "../../types/venue";
import placeholderImage from "../../../../shared/assets/images/placeholder.webp";

export const ImageSection = ({ venue }: VenueSectionProps) => {
  return (
    <div className="bg-muted flex max-h-136 justify-center overflow-hidden rounded-2xl">
      <img
        src={venue.media?.[0]?.url ?? placeholderImage}
        alt={venue.media?.[0]?.alt ?? "Venue placeholder"}
        className="max-h-136 max-w-full object-cover"
      />
    </div>
  );
};
