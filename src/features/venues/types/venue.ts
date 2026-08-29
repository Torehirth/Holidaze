export type Venue = {
  id: string;
  name: string;
  description: string;
  media: {
    url: string;
    alt: string;
  }[];
  location: {
    city: string | null;
    country: string | null;
  };
  maxGuests: number;
  rating: number;
  price: number;
  meta: {
    wifi: boolean;
    parking: boolean;
    breakfast: boolean;
    pets: boolean;
  };
};

export type APIMetaTypes = {
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
  meta: APIMetaTypes;
};

export type SingleVenueResponse = {
  data: Venue & VenueDetails;
  meta: object;
};

export type VenueDetails = {
  bookings: VenueBookings[];
  owner: VenueOwner;
};

type VenueOwner = {
  avatar: {
    url: string;
    alt: string;
  };
  banner: {
    url: string;
    alt: string;
  };
  bio: string;
  email: string;
  name: string;
};

type VenueBookings = {
  created: string;
  customer: {
    name: string;
    email: string;
    bio: string;
    avatar: {
      url: string;
      alt: string;
    };
    banner: {
      url: string;
      alt: string;
    };
  };
  dateFrom: string;
  dateTo: string;
  guests: number;
  id: string;
  updated: string;
};

export type VenueSectionProps = {
  venue: Venue & VenueDetails;
};
