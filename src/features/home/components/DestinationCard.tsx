import { Link } from "react-router";

type DestinationCardProps = {
  name: string;
  image: string;
  imageAlt: string;
  to: string;
};

export const DestinationCard = ({ name, image, imageAlt, to }: DestinationCardProps) => {
  return (
    <article className="bg-card overflow-hidden rounded-xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <Link to={to} aria-label={`Explore venues in ${name}`} className="block">
        <img src={image} alt={imageAlt} className="aspect-4/3 w-full object-cover" />
        <div className="p-4">
          <h3 className="text-foreground text-base font-medium">{name}</h3>
          <p className="text-muted-foreground mt-1 text-sm">Explore venues</p>
        </div>
      </Link>
    </article>
  );
};
