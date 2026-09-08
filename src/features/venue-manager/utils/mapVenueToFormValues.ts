import type { Venue } from "../../venues/types/venue";
import type { VenueFormValues } from "../types/form";

export const mapVenueToFormValues = (venue: Venue): VenueFormValues => {
  return {
    name: venue.name,
    description: venue.description,
    media: [
      {
        url: venue.media[0]?.url ?? "",
        alt: venue.media[0]?.alt ?? "",
      },
    ],
    meta: {
      wifi: venue.meta.wifi,
      parking: venue.meta.parking,
      breakfast: venue.meta.breakfast,
      pets: venue.meta.pets,
    },
    price: venue.price,
    rating: venue.rating,
    maxGuests: venue.maxGuests,
    location: {
      address: venue.location.address ?? "",
      city: venue.location.city ?? "",
      zip: venue.location.zip ?? "",
      country: venue.location.country ?? "",
      continent: venue.location.continent ?? "",
      lat: venue.location.lat ?? "",
      lng: venue.location.lng ?? "",
    },
  };
};
