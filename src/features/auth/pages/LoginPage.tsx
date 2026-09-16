import { Link, useNavigate } from "react-router";
import { Button } from "../../../shared/components/ui/buttons/Button";
import { useState, type SubmitEvent } from "react";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";
import { loginUser } from "./../services/loginUser";
import { useAuth } from "../hooks/useAuth";

const inputStyles =
  "mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900 focus:ring-2 focus:ring-stone-900/10";

export const LoginPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    const loginData = {
      email,
      password,
    };

    try {
      setError(null);
      setLoading(true);

      const result = await loginUser(loginData);

      login({
        userName: result.data.name,
        email: result.data.email,
        accessToken: result.data.accessToken,
        venueManager: result.data.venueManager,
        profileImageURL: result.data.avatar?.url,
      });

      navigate("/", { replace: true });
    } catch (caughtError) {
      if (caughtError instanceof Error) {
        setError(caughtError.message);
      } else {
        setError("Couldn't log in at this point. Please Try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <title>Log in | Holidaze</title>
      <meta name="description" content="Log in to your Holidaze account." />
      <meta name="robots" content="noindex, nofollow" />

      <section className="mx-auto mt-12 mb-8 flex max-w-md flex-col px-4 lg:mt-30">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-medium">Welcome back</h1>
          <p className="mt-2">Log in to manage your bookings and venues.</p>
        </div>
        <div className="mb-4 pb-2">
          {error && <FeedbackMessage variant="error" message={error} />}
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="font-medium">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@stud.noroff.no"
              pattern="^[^\s@]+@stud\.noroff\.no$"
              required
              className={inputStyles}
            />
          </div>
          <div>
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              minLength={8}
              autoComplete="current-password"
              placeholder="Enter your password"
              required
              className={inputStyles}
            />
          </div>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
          </Button>
        </form>
        <p className="mt-6 text-center">
          Don't have an account?
          <Link
            to="/register"
            className="pl-2 font-medium whitespace-nowrap underline-offset-4 hover:underline active:opacity-80">
            Create an account
          </Link>
        </p>
      </section>
    </>
  );
};
