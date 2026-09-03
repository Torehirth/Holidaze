export type BookedVenueResponse = {
  data: Booking[];
  meta: object;
};

export type Booking = {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  created: string;
  updated: string;
  venue: Venue;
  customer: Customer;
};

type Customer = {
  name: string;
  email: string;
  bio: string | null;
  avatar: {
    url: string;
    alt: string;
  };
  banner: {
    url: string;
    alt: string;
  };
};

type Venue = {
  created: string;
  description: string;
  id: string;
  location: {
    address: string;
    city: string;
    zip: string;
    country: string;
    continent: string;
  };
  maxGuests: number;
  media: {
    url: string;
    alt: string;
  }[];

  meta: {
    wifi: boolean;
    parking: boolean;
    breakfast: boolean;
    pets: boolean;
  };
  name: string;
  price: number;

  rating: number;
  updated: string;
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
