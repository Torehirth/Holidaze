import type { Media, PaginationMeta, Venue } from "../../venues/types/venue";

export type BookingCustomer = {
  name: string;
  email: string;
  bio: string | null;
  avatar: Media;
  banner: Media;
};

export type Booking = {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  created: string;
  updated: string;
  venue: Venue;
  customer?: BookingCustomer;
};

export type BookedVenueResponse = {
  data: Booking[];
  meta: PaginationMeta;
};

export type BookedVenueCardProps = {
  currentDate: Date;
  venueId: string;
  imageUrl: string | undefined;
  imageAlt: string | undefined;
  venueName: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  city: string | null;
  country: string | null;
};
