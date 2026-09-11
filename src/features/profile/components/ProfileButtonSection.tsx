import { BedDouble, Edit3, LogOut } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../../../shared/components/ui/buttons/Button";
import { useLogout } from "../../auth/hooks/useLogout";
import type { User } from "../types/user";

type ProfileButtonSectionProps = {
  user: User;
};

export const ProfileButtonSection = ({ user }: ProfileButtonSectionProps) => {
  return (
    <div className="mt-6 flex flex-col gap-3 border-t border-gray-300 pt-5 sm:flex-row sm:justify-end">
      {user.venueManager && (
        <Link
          to="/host"
          className="bg-primary text-background hover:text-foreground flex w-full items-center justify-center rounded-xl border px-6 py-3 font-medium whitespace-nowrap transition-colors hover:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none">
          <BedDouble aria-hidden="true" className="mr-1 h-4 w-4" />
          Manage venues
        </Link>
      )}
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
  );
};
