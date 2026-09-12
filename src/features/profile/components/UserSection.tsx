import profilePlaceholderImage from "../../../shared/assets/images/placeholder_profile.webp";
import type { User } from "../types/user";
import { ProfileButtonSection } from "./ProfileButtonSection";

type UserSectionProps = {
  user: User;
  isOwnProfile: boolean;
};

export const UserSection = ({ user, isOwnProfile }: UserSectionProps) => {
  const determineBio = () => {
    if (isOwnProfile && user.bio) {
      return user.bio;
    } else if (!isOwnProfile && user.bio) {
      return user.bio;
    } else {
      return "";
    }
  };
  const userBio = determineBio();

  return (
    <section
      aria-labelledby="profile-heading"
      className="bg-card overflow-hidden rounded-2xl border border-gray-400 capitalize shadow-sm">
      <div className="h-40 overflow-hidden sm:h-56">
        <img
          src={user.banner.url || "https://placehold.net/600x400.png"}
          alt={user.banner.alt || `${user.name}'s profile banner`}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-5 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="bg-card w-fit rounded-full border border-gray-300 p-1.5 shadow-sm">
            <img
              src={user.avatar.url || profilePlaceholderImage}
              alt={user.avatar.alt || `${user.name}'s profile image`}
              className="h-24 w-24 rounded-full object-cover object-center sm:h-28 sm:w-28"
            />
          </div>
          <div>
            <h2 id="profile-heading" className="text-2xl font-semibold">
              {user.name}
            </h2>
            <p className="lowercase">{user?.email}</p>
            <span className="bg-accent mt-2 flex w-fit items-center justify-between gap-2 rounded-full px-3 py-1 text-sm font-medium">
              {user?.venueManager ? "Venue manager" : "Customer"}
            </span>
            <div className="mt-2 flex gap-2">
              <div className="bg-success flex w-fit items-center gap-2 rounded-2xl px-3 py-1">
                <p className="text-sm">Booked stays:</p>
                <p className="text-sm">{user.bookings.length}</p>
              </div>
              <div className="bg-success flex w-fit items-center gap-2 rounded-2xl px-3 py-1">
                <p className="text-sm">Venues:</p>
                <p className="text-sm">{user.venues.length}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 max-w-2xl border-t border-gray-300 pt-5">
          <h3 className="font-medium">About</h3>
          <p className="mt-2 leading-relaxed">{userBio}</p>
        </div>
        {isOwnProfile && <ProfileButtonSection user={user} />}
      </div>
    </section>
  );
};
