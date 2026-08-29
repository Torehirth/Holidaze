export type RegisterResponse = {
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
