import { VenueCard } from "../../../shared/components/ui/VenueCard";

export const FeaturedStays = () => {
  return (
    <section className="-my-8 px-12 lg:my-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4">
          <h2 className="text-xl font-medium">Featured Stays</h2>
          <p className="text-muted-foreground">
            Discover unique places for your next getaway
          </p>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:overflow-visible">
          <div className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-auto lg:flex-1">
            <VenueCard />
          </div>

          <div className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-auto lg:flex-1">
            <VenueCard />
          </div>

          <div className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-auto lg:flex-1">
            <VenueCard />
          </div>

          <div className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-auto lg:flex-1">
            <VenueCard />
          </div>
        </div>
      </div>
    </section>
  );
};
