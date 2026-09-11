import { ArrowLeft } from "lucide-react";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";
import { Loader } from "../../../shared/components/ui/Loader";
import { useAuth } from "../../auth/hooks/useAuth";
import { getProfile } from "../services/getProfile";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { EditProfileForm } from "../components/EditProfileForm";
import type { User } from "../types/user";

export const EditProfilePage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    const loadProfileData = async () => {
      if (!currentUser) {
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const profileObj = await getProfile(currentUser, currentUser.userName);
        setProfile(profileObj.data);
      } catch (caughtError) {
        if (caughtError instanceof Error) {
          setError(caughtError.message);
        } else {
          setError("Couldn't load profile data at the moment.");
        }
      } finally {
        setLoading(false);
      }
    };
    loadProfileData();
  }, [currentUser]);

  return (
    <>
      <title>Edit profile | Holidaze</title>
      <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/profile"
          className="mb-6 inline-flex items-center gap-2 text-sm hover:opacity-70">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to profile
        </Link>
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">Edit profile</h1>
          <p className="mt-2">Update how your profile appears to guests and hosts on Holidaze.</p>
          {error && <FeedbackMessage variant="error" message={error} />}
          {loading && <Loader />}
        </div>
        {profile && currentUser && <EditProfileForm profile={profile} currentUser={currentUser} />}
      </div>
    </>
  );
};
