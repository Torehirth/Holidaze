import type { VenueSectionProps } from "../../types/venue";
import placeholderProfile from "../../../../shared/assets/images/placeholder_profile.webp";
import { Link } from "react-router";

export const HostSection = ({ venue }: VenueSectionProps) => {
  return (
    <section className="w-fit border-b border-gray-400 pr-12 pb-8">
      <h2 className="mb-4 text-xl font-medium">Hosted by</h2>
      <Link to={`/profiles/${venue.owner.name}`} className="flex items-center gap-4">
        <img
          src={venue.owner.avatar.url || placeholderProfile}
          alt={venue.owner.avatar.alt || "Owner's avatar"}
          className="h-14 w-14 rounded-full object-cover hover:opacity-80 active:scale-[0.95]"
        />
        <div>
          <h3 className="font-medium hover:opacity-80 active:scale-[0.95]">{venue.owner.name}</h3>
          <p className="text-muted-foreground mt-1 text-sm">{venue.owner.bio ?? ""}</p>
        </div>
      </Link>
    </section>
  );
};
