import { Star } from "lucide-react";
import { Link } from "react-router";

// Need to add data dynamically from API

export const VenueCard = () => {
  return (
    <>
      <article className="bg-card overflow-hidden rounded-xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
        <Link
          to="/venues/1"
          aria-label="View venue details for Lakeside Serenity Cabin"
          className="block">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800"
            alt="Lakeside Serenity Cabin surrounded by nature"
            className="aspect-4/3 w-full object-cover"
          />

          <div className="space-y-3 p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-foreground line-clamp-2 text-base font-medium">
                Lakeside Serenity Cabin
              </h3>

              <div
                className="flex shrink-0 items-center gap-1"
                aria-label="Rated 4.9 out of 5">
                <Star
                  aria-hidden="true"
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
                <span className="text-sm">4.9</span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm">Norwegian Fjords</p>

            <div className="flex items-end justify-between">
              <p className="text-sm">
                <span className="font-semibold">$189</span>
                <span className="text-muted-foreground"> / night</span>
              </p>

              <p className="text-muted-foreground text-sm">124 reviews</p>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
};
