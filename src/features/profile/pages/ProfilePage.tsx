import { useAuth } from "./../../auth/hooks/useAuth";
import { BookedVenueSection } from "../components/BookedVenueSection";
import { UserSection } from "../components/UserSection";
import { getProfile } from "../services/getProfile";
import { useEffect, useState } from "react";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";
import type { User } from "../types/user";
import { Loader } from "../../../shared/components/ui/Loader";

export const ProfilePage = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      if (!currentUser) {
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const result = await getProfile(currentUser);
        setUser(result.data);
      } catch (caughtError) {
        if (caughtError instanceof Error) {
          setError(caughtError.message);
        } else {
          setError("Couldn't retrieve profile right now.");
        }
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, [currentUser]);

  return (
    <>
      <title>{`${currentUser?.userName}'s profile | Holidaze`}</title>
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="sr-only">My profile</h1>

        {loading && <Loader />}
        {error && <FeedbackMessage variant="error" message={error} />}

        {user && <UserSection user={user} />}
        <BookedVenueSection />
      </div>
    </>
  );
};
