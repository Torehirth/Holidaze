import { Link } from "react-router";

export const VenueDetailsPage = () => {
  return (
    <div className="p-8">
      <h1 className="p-4 pb-4">Venue Details Page</h1>
      <Link to="/venues" className="px-2">
        Back to Venues
      </Link>
    </div>
  );
};
