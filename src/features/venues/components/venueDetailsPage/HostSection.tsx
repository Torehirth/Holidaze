import type { VenueSectionProps } from "../../../../shared/types/venue";
import placeholderProfile from "../../../../shared/assets/images/placeholder_profile.webp";

export const HostSection = ({ venue }: VenueSectionProps) => {
  return (
    <section className="w-fit border-b border-gray-400 pr-12 pb-8">
      <h2 className="mb-4 text-xl font-medium">Hosted by</h2>
      <div className="flex items-center gap-4">
        <img
          src={venue.owner.avatar.url ?? placeholderProfile}
          alt={venue.owner.avatar.url ?? "Owners avatar"}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium">{venue.owner.name}</h3>
          <p className="text-muted-foreground mt-1 text-sm">{venue.owner.bio ?? ""}</p>
        </div>
      </div>
    </section>
  );
};
