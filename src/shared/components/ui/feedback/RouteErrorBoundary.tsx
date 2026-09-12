import { Link, useRouteError } from "react-router";
import logo from "../../../assets/logo/logo_small.svg";

export const RouteErrorBoundary = () => {
  const error = useRouteError();

  console.error(error);

  return (
    <section className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
      <img src={logo} alt="Holidaze logo" className="mb-4" />
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-gray-600">An unexpected error occurred. Please try again.</p>
      <Link to="/" className="mt-4 rounded-xl bg-stone-900 px-5 py-3 text-white">
        Go to homepage
      </Link>
    </section>
  );
};
