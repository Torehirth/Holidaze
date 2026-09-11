import type { Media, VenueLocation, VenueMeta } from "../../venues/types/venue";

export type VenueFormValues = {
  name: string;
  description: string;
  media: Media[];
  price: number;
  maxGuests: number;
  rating: number;
  meta: VenueMeta;
  location: VenueLocation;
};
