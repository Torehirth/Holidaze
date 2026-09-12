import type { Booking } from "../../profile/types/bookings";

export type Media = {
  url: string;
  alt: string;
};

export type VenueLocation = {
  address: string | null;
  city: string | null;
  zip: string | null;
  country: string | null;
  continent: string | null;
  lat: number;
  lng: number;
};

export type VenueMeta = {
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  pets: boolean;
};

export type Venue = {
  id: string;
  name: string;
  description: string;
  media: Media[];
  location: VenueLocation;
  maxGuests: number;
  rating: number;
  price: number;
  meta: VenueMeta;
  created: string;
  updated: string;
  bookings: Booking[];
};

export type PaginationMeta = {
  currentPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  nextPage: number | null;
  previousPage: number | null;
  pageCount: number;
  totalCount: number;
};

export type VenuesResponse = {
  data: Venue[];
  meta: PaginationMeta;
};

export type VenueOwner = {
  name: string;
  email: string;
  bio: string | null;
  avatar: Media;
  banner: Media;
};

export type VenueBooking = {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  created: string;
  updated: string;
  customer: {
    name: string;
    email: string;
    bio: string | null;
    avatar: Media;
    banner: Media;
  };
};

export type VenueDetails = {
  bookings: VenueBooking[];
  owner: VenueOwner;
};

export type VenueWithDetails = Venue & VenueDetails;

export type SingleVenueResponse = {
  data: VenueWithDetails;
  meta: object;
};

export type VenueSectionProps = {
  venue: VenueWithDetails;
};

export type BookingSectionProps = {
  venue: VenueWithDetails;
  onBookingCreated: () => Promise<void>;
};
