import { Edit3, LogOut } from "lucide-react";
import profilePlaceholderImage from "../../../shared/assets/images/placeholder_profile.webp";
import { Button } from "../../../shared/components/ui/buttons/Button";
import type { User } from "../types/user";
import { useLogout } from "../../auth/hooks/useLogout";
import { Link } from "react-router";

type UserSectionProps = {
  user: User;
};

export const UserSection = ({ user }: UserSectionProps) => {
  return (
    <section
      aria-labelledby="profile-heading"
      className="bg-card overflow-hidden rounded-2xl border border-gray-400 shadow-sm">
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
            <p className="">{user?.email}</p>
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
                <p className="text-sm">{user.bookings.length}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 max-w-2xl border-t border-gray-300 pt-5">
          <h3 className="font-medium">About</h3>
          <p className="mt-2 leading-relaxed">{user.bio || "Write a little text about yourself"}</p>
        </div>
        <div className="mt-6 flex flex-col gap-3 border-t border-gray-300 pt-5 sm:flex-row sm:justify-end">
          <Link
            to="/profile/edit"
            className="border-primary text-primary hover:text-foreground flex w-full items-center justify-center rounded-xl border px-6 py-3 font-medium transition-colors hover:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none">
            <Edit3 aria-hidden="true" className="mr-1 h-4 w-4" />
            Edit profile
          </Link>
          <Button type="button" variant="secondary" onClick={useLogout()}>
            <LogOut aria-hidden="true" className="mr-1 h-4 w-4" />
            Log out
          </Button>
        </div>
      </div>
    </section>
  );
};
