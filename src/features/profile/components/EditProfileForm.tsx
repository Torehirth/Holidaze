import { Image, UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { Button } from "../../../shared/components/ui/buttons/Button";
import profilePlaceholderImage from "../../../shared/assets/images/placeholder_profile.webp";
import type { UpdateProfileData } from "../types/update";
import { updateProfile } from "../services/updateProfile";
import { useState, type SubmitEvent } from "react";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";
import { Loader } from "./../../../shared/components/ui/Loader";
import type { AuthUser } from "../../auth/types/auth";
import type { User } from "../types/user";

type EditProfileFormProps = {
  currentUser: AuthUser;
  profile: User;
};

export const EditProfileForm = ({ currentUser, profile }: EditProfileFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [avatarUrl, setAvatarUrl] = useState<string>(profile.avatar.url);
  const [bannerUrl, setBannerUrl] = useState<string>(profile.banner.url);
  const navigate = useNavigate();
  const inputStyles =
    "mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900 focus:ring-2 focus:ring-stone-900/10";

  const handleUpdateProfile = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!currentUser) {
      return;
    }

    const formData = new FormData(event?.currentTarget);
    const profileData: UpdateProfileData = {
      bio: String(formData.get("bio")),
      venueManager: formData.get("venueManager") === "on" ? true : false,
      avatar: {
        url: String(formData.get("avatarUrl")),
        alt: String(formData.get("avatarAlt")),
      },
      banner: {
        url: String(formData.get("bannerUrl")),
        alt: String(formData.get("bannerAlt")),
      },
    };

    try {
      setLoading(true);
      setError(null);

      const profileObj = await updateProfile(currentUser, profileData);

      setAvatarUrl(String(profileObj.data.avatar?.url));
      setBannerUrl(String(profileObj.data.banner?.url));
      navigate("/profile");
    } catch (caughtError) {
      if (caughtError instanceof Error) {
        setError(caughtError.message);
      } else {
        setError("Could not update profile at the moment.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="space-y-8" onSubmit={handleUpdateProfile}>
      {error && <FeedbackMessage variant="error" message={error} />}
      {loading && <Loader />}
      <section
        aria-labelledby="profile-details-heading"
        className="bg-card rounded-2xl border border-gray-400 p-5 shadow-sm sm:p-8">
        <div className="mb-6">
          <h2 id="profile-details-heading" className="text-xl font-medium">
            Profile details
          </h2>
          <p className="mt-1 text-sm">
            Add a short description to help other users get to know you.
          </p>
        </div>
        <div>
          <label htmlFor="bio" className="text-sm font-medium">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={5}
            maxLength={160}
            placeholder="Tell guests and hosts a little about yourself..."
            className={`${inputStyles} resize-y`}
            defaultValue={profile.bio ?? ""}
          />
        </div>
      </section>
      <section
        aria-labelledby="avatar-heading"
        className="bg-card rounded-2xl border border-gray-400 p-5 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <UserRound aria-hidden="true" className="h-5 w-5" />
          <div>
            <h2 id="avatar-heading" className="text-xl font-medium">
              Profile image
            </h2>
            <p className="mt-1 text-sm">Use a publicly accessible image URL.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-start">
          <img
            src={avatarUrl || profilePlaceholderImage}
            alt="Current profile preview"
            className="h-28 w-28 rounded-full border border-gray-300 object-cover sm:h-32 sm:w-32"
            onError={(event) => {
              event.currentTarget.src = profilePlaceholderImage;
            }}
          />
          <div className="space-y-5">
            <div>
              <label htmlFor="avatar-url" className="text-sm font-medium">
                Image URL
              </label>
              <input
                id="avatar-url"
                name="avatarUrl"
                type="url"
                inputMode="url"
                placeholder="https://example.com/profile-image.jpg"
                className={inputStyles}
                value={avatarUrl ?? ""}
                onChange={(event) => setAvatarUrl(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="avatar-alt" className="text-sm font-medium">
                Alternative text
              </label>
              <input
                id="avatar-alt"
                name="avatarAlt"
                type="text"
                placeholder="Describe the profile image"
                className={inputStyles}
                defaultValue={profile.avatar.alt ?? ""}
              />
              <p className="mt-2 text-sm">
                Describe what is shown for users who cannot see the image.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="banner-heading"
        className="bg-card rounded-2xl border border-gray-400 p-5 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <Image aria-hidden="true" className="h-5 w-5" />
          <div>
            <h2 id="banner-heading" className="text-xl font-medium">
              Banner image
            </h2>
            <p className="mt-1 text-sm">Choose a wide image for the top of your profile.</p>
          </div>
        </div>
        <img
          src={bannerUrl || "https://placehold.net/600x400.png"}
          alt="Current banner preview"
          className="mb-6 aspect-video max-h-72 w-full rounded-xl border border-gray-300 object-cover"
          onError={(event) => {
            event.currentTarget.src = "https://placehold.net/600x400.png";
          }}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="banner-url" className="text-sm font-medium">
              Image URL
            </label>
            <input
              id="banner-url"
              name="bannerUrl"
              type="url"
              inputMode="url"
              placeholder="https://example.com/banner-image.jpg"
              className={inputStyles}
              value={bannerUrl ?? ""}
              onChange={(event) => setBannerUrl(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="banner-alt" className="text-sm font-medium">
              Alternative text
            </label>
            <input
              id="banner-alt"
              name="bannerAlt"
              type="text"
              placeholder="Describe the banner image"
              className={inputStyles}
              defaultValue={profile.banner.alt ?? ""}
            />
          </div>
        </div>
      </section>
      <section
        aria-labelledby="account-heading"
        className="bg-card rounded-2xl border border-gray-400 p-5 shadow-sm sm:p-8">
        <h2 id="account-heading" className="text-xl font-medium">
          Account type
        </h2>
        <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-gray-400 p-4">
          <input
            type="checkbox"
            name="venueManager"
            className="accent-primary mt-1 h-4 w-4 shrink-0"
            defaultChecked={currentUser?.venueManager ?? false}
          />
          <span>
            <span className="block font-medium">Venue manager</span>
            <span className="mt-1 block text-sm">
              Enable tools for creating and managing venues and viewing their bookings.
            </span>
          </span>
        </label>
      </section>
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Link
          to="/profile"
          className="border-primary text-primary flex items-center justify-center rounded-xl border px-6 py-3 font-medium transition hover:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none">
          Cancel
        </Link>
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? "Updating..." : "Save changes"}
        </Button>
      </div>
    </form>
  );
};
