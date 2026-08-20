import { DestinationCard } from "./DestinationCard";
import norwayImage from "../../../shared/assets/images/simon-williams-f6Fid_KXV4Y-unsplash.webp";
import finlandImage from "../../../shared/assets/images/saikrishna-saketh-yellapragada-Fvt_h7WMtB0-unsplash.webp";
import italyImage from "../../../shared/assets/images/anders-jilden-cYrMQA7a3Wc-unsplash.webp";

export const PopularDestinations = () => {
  return (
    <section
      className="bg-muted mt-12 px-12 py-8"
      aria-labelledby="popular-destinations-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h2
            id="popular-destinations-heading"
            className="text-foreground text-xl font-medium">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground">Explore stays in popular destinations</p>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:overflow-visible">
          <div className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-auto lg:flex-1">
            <DestinationCard
              name="Norway"
              image={norwayImage}
              imageAlt="Colourful houses on the pier"
              to="/venues?location=norway"
            />
          </div>

          <div className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-auto lg:flex-1">
            <DestinationCard
              name="Finland"
              image={finlandImage}
              imageAlt="A lake with tree-grown islands"
              to="/venues?location=finland"
            />
          </div>

          <div className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-auto lg:flex-1">
            <DestinationCard
              name="Italy"
              image={italyImage}
              imageAlt="Coastal village in Italy overlooking the sea at sunset"
              to="/venues?location=italy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
