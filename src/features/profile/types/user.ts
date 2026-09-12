import type { Media, Venue } from "../../venues/types/venue";
import type { Booking } from "./bookings";

export type User = {
  name: string;
  email: string;
  bio: string | null;
  avatar: Media;
  banner: Media;
  venueManager: boolean;
  bookings: Booking[];
  venues: Venue[];
  _count: {
    venues: number;
    bookings: number;
  };
};

export type UserResponse = {
  data: User;
  meta: object;
};

export type UserSectionProps = {
  user: User;
};
