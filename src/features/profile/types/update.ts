import type { Media } from "../../venues/types/venue";

export type UpdateProfileData = {
  bio?: string;
  avatar?: Media;
  banner?: Media;
  venueManager?: boolean;
};

export type Profile = UpdateProfileData & {
  name: string;
  email: string;
};

export type ProfileResponse = {
  data: Profile;
  meta: object;
};
