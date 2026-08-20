import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export const CTASection = () => {
  return (
    <section className="bg-primary px-4 py-16 text-center text-white">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-xl font-medium">Ready to Start Your Journey?</h2>
        <p className="mt-3 text-sm text-white/80">
          Discover your next stay and find a place that feels just right.
        </p>
        <Link
          to="/venues"
          className="text-primary mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium transition-opacity hover:opacity-90">
          Explore Venues
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};
