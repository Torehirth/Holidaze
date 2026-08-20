import { CTASection } from "../components/CTASection";
import { FeaturedStays } from "../components/FeaturedStays";
import { PopularDestinations } from "../components/PopularDestinations";
import { WhyChooseHolidaze } from "../components/WhyChooseHolidaze";
import { Hero } from "./../components/Hero";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedStays />
      <PopularDestinations />
      <WhyChooseHolidaze />
      <CTASection />
    </>
  );
};
