import { Home, Search } from "lucide-react";
import { ButtonLink } from "../../../shared/components/ui/buttons/ButtonLink";

export function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
      <div
        className="bg-accent mb-8 flex h-36 w-36 items-center justify-center rounded-full"
        aria-hidden="true">
        <span className="text-foreground text-6xl font-bold">404</span>
      </div>
      <p className="text-muted-foreground mb-2 text-sm font-medium tracking-[0.2em] uppercase">
        Page not found
      </p>
      <h1 className="text-foreground mb-4 text-3xl font-medium sm:text-4xl">
        Oops! We couldn't find that page.
      </h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page may have been moved, deleted, or the URL might be incorrect.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <ButtonLink to="/" variant="primary">
          <Home aria-hidden="true" className="h-5 w-5" />
          Back to Home
        </ButtonLink>
        <ButtonLink to="/venues" variant="secondary">
          <Search className="h-5 w-5" />
          Browse Venues
        </ButtonLink>
      </div>
    </section>
  );
}
