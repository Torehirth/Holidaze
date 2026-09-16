import { Link, useNavigate } from "react-router";
import { Button } from "./../../../shared/components/ui/buttons/Button";
import { useState, type SubmitEvent } from "react";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";
import { registerUser } from "../services/registerUser";
import type { RegistrationData } from "../types/auth";

export const RegisterPage = () => {
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const inputStyles =
    "mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900 focus:ring-2 focus:ring-stone-900/10";
  const navigate = useNavigate();

  const clearPasswordError = () => {
    setPasswordError(null);
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    setPasswordError(null);

    const username = String(formData.get("username") ?? "");
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const venueManager = formData.get("venueManager") === "on" ? true : false;
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match!");
      return;
    }

    const userRegData: RegistrationData = {
      name: username,
      email,
      password,
      venueManager,
    };

    try {
      setError(null);
      setLoading(true);

      await registerUser(userRegData);
      navigate("/login", { replace: true });
    } catch (caughtError) {
      if (caughtError instanceof Error) {
        setError(caughtError.message);
      } else {
        setError("Couldn't register user at this point");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>Create an account | Holidaze</title>
      <meta name="description" content="Sign up for a free Holidaze account." />
      <meta name="robots" content="noindex, nofollow" />

      <section className="mx-auto mt-12 mb-8 flex max-w-md flex-col px-4 lg:mt-30">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-medium">Create your account </h1>
          <p className="mt-2">Register to book stays or manage your own venues.</p>
        </div>
        <div className="mb-4 pb-2">
          {error && <FeedbackMessage variant="error" message={error} />}
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="font-medium">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="Enter your name"
              required
              className={inputStyles}
            />
          </div>
          <div>
            <label htmlFor="email" className="font-medium">
              Student email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              title="Enter a valid stud.noroff.no email address"
              placeholder="name@stud.noroff.no"
              pattern="^[^\s@]+@stud\.noroff\.no$"
              required
              className={inputStyles}
              aria-describedby="email-help"
            />
            <p id="email-help" className="mt-2 text-sm">
              Registration requires a stud.noroff.no email address.
            </p>
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
              autoComplete="new-password"
              placeholder="Create a password"
              required
              className={inputStyles}
              onChange={clearPasswordError}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="font-medium">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              minLength={8}
              autoComplete="new-password"
              placeholder="Enter the password again"
              required
              className={inputStyles}
              onChange={clearPasswordError}
            />
          </div>
          {passwordError && <FeedbackMessage variant="warning" message={passwordError} />}
          <div className="bg-muted flex items-start gap-3 rounded-xl p-4">
            <input
              id="venueManager"
              name="venueManager"
              type="checkbox"
              className="accent-foreground mt-1 h-4 w-4 cursor-pointer"
            />
            <div>
              <label htmlFor="venueManager" className="cursor-pointer font-medium">
                Register as a venue manager
              </label>
              <p className="mt-1 text-sm">
                Venue managers can create venues and manage their bookings.
              </p>
            </div>
          </div>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </Button>
        </form>
        <p className="mt-6 text-center">
          Already have an account?
          <Link
            to="/login"
            className="pl-2 font-medium whitespace-nowrap underline-offset-4 hover:underline active:opacity-80">
            Log in
          </Link>
        </p>
      </section>
    </>
  );
};
