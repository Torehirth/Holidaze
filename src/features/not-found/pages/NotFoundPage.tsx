import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <>
      <div className="p-8">
        <h1 className="p-4 pb-4">Page Not Found</h1>
        <Link to="/venues" className="px-2">
          Venues
        </Link>
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
