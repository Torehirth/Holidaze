import { Link } from "react-router";

export const LoginPage = () => {
  return (
    <>
      <div className="p-8">
        <h1 className="p-4 pb-4">Login Page</h1>
        <Link to="/venues" className="px-2">
          Venues
        </Link>
        <Link to="/" className="px-2">
          Home
        </Link>
      </div>
    </>
  );
};
