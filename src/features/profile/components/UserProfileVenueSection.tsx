import type { User } from "../types/user";
import { VenueCard } from "./../../../shared/components/ui/VenueCard";

type UserProfileVenueSectionProps = {
  user: User;
};

export const UserProfileVenueSection = ({ user }: UserProfileVenueSectionProps) => {
  return (
    <section className="border-foreground/20 mt-12 border-t pt-10">
      <h2 className="text-2xl font-medium">{`${user?.name}'s venues`}</h2>
      <p className="pt-1">All venues that belongs to the user</p>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {user?.venues.map((venue) => {
          return (
            <li key={venue.id}>
              <VenueCard
                id={venue.id}
                name={venue.name}
                description={venue.description}
                price={venue.price}
                imageURL={venue.media?.[0]?.url}
                imageAlt={venue.media?.[0]?.alt}
                rating={venue.rating}
                guests={venue.maxGuests}
                city={venue.location.city}
                country={venue.location.country}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
