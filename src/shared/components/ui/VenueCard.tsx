import { Star } from "lucide-react";
import { Link } from "react-router";
import placeholderImage from "../../assets/images/placeholder.webp";

type VenueProps = {
  id: string;
  name: string;
  description: string;
  imageURL?: string | undefined;
  imageAlt?: string | undefined;
  city?: string | null;
  country?: string | null;
  rating: number;
  price: number;
  guests: number;
};

export const VenueCard = ({
  id,
  name,
  description,
  price,
  imageURL,
  imageAlt,
  rating,
  guests,
  city,
  country,
}: VenueProps) => {
  return (
    <article className="bg-card focus-within:ring-foreground h-full overflow-hidden rounded-2xl capitalize shadow-sm transition-all focus-within:ring-2 hover:border hover:shadow-md">
      <Link
        to={`/venues/${id}`}
        aria-label={`View venue details for ${name}`}
        className="block focus-visible:outline-none">
        <img
          src={imageURL || placeholderImage}
          alt={imageAlt || description}
          className="aspect-4/3 w-full object-cover"
        />
        <div className="space-y-3 p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-foreground line-clamp-2 text-base font-medium">{name}</h3>
            <div className="flex shrink-0 items-center gap-1">
              <Star aria-hidden="true" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm" aria-hidden="true">
                {rating}
              </span>
            </div>
          </div>
          <p className="text-sm">{city || country || "Missing location"}</p>
          <div className="flex items-end justify-between">
            <p className="text-sm">
              <span className="font-semibold">{price}</span>
              <span> / night</span>
            </p>
            <p>Max guests: {guests}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};
