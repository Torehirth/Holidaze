export const emptyVenueFormValues = {
  name: "",
  description: "",
  media: [
    {
      url: "",
      alt: "",
    },
  ],
  meta: {
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
  },
  price: 0,
  rating: 0,
  maxGuests: 0,
  location: {
    address: "",
    city: "",
    zip: "",
    country: "",
    continent: "",
    lat: 0,
    lng: 0,
  },
};
