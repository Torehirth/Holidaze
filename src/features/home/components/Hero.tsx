import heroImage from "../../../shared/assets/images/ethan-robertson-SYx3UCHZJlo-unsplash.webp";
import { VenuesSearchForm } from "../../../shared/components/forms/search/VenuesSearchForm";

export const Hero = () => {
  return (
    <section className="relative flex flex-col">
      <img
        src={heroImage}
        alt="Sunglasses laying in the sand on a beach"
        className="max-h-125 object-cover"
      />
      <article className="absolute w-full text-center">
        <h1 className="xs:pt-12 px-2 pt-4 pb-4 text-5xl md:pt-16 md:text-6xl">
          Find Your Perfect Escape
        </h1>
      </article>
      <div className="-translate-y-10 px-4 sm:-translate-y-20 lg:static lg:-translate-y-15 lg:px-12">
        <VenuesSearchForm />
      </div>
    </section>
  );
};
