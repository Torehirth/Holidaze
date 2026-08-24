export type Venue = {
  id: string;
  name: string;
  description: string;
  media: [
    {
      url: string;
      alt: string;
    },
  ];
  url: string;
  location: {
    city: string;
    country: string;
  };
  maxGuests: number;
  rating: number;
  price: number;
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
