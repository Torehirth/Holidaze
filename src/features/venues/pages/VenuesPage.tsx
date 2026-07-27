import { Link } from "react-router";

export const VenuesPage = () => {
  return (
    <>
      <div className="p-8">
        <h1 className="p-4 pb-4">Venues Page</h1>
        <Link to="/login" className="px-2">
          Login
        </Link>
        <Link to="/" className="px-2">
          Home
        </Link>
      </div>
    </>
  );
};
