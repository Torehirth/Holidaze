import { Link } from "react-router";

export const BookingsDashboardPage = () => {
  return (
    <>
      <div className="p-8">
        <h1 className="p-4 pb-4">Booking Dashboard page</h1>
        <Link to="/" className="px-2">
          Home
        </Link>
        <Link to="/venues" className="px-2">
          Venues
        </Link>
        <Link to="/login" className="px-2">
          Login
        </Link>
      </div>
    </>
  );
};
