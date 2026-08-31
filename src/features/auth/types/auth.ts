export type UserProfile = {
  name: string;
  email: string;
  bio?: string;
  avatar?: {
    url?: string;
    alt?: string;
  };
  banner?: {
    url?: string;
    alt?: string;
  };
  venueManager: boolean;
};

export type RegistrationData = {
  name: string;
  email: string;
  password: string;
  venueManager: boolean;
};

export type RegisterResponse = {
  data: UserProfile;
  meta: object;
};

export type LoginData = {
  email: string;
  password: string;
};

export type LoginResponse = {
  data: UserProfile & { accessToken: string };
  meta: object;
};

export type AuthUser = {
  userName: string;
  accessToken: string;
  email: string;
  venueManager: boolean;
  profileImageURL: string | undefined | null;
};
