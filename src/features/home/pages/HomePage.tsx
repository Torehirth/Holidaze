import { CTASection } from "../components/CTASection";
import { NewVenues } from "../components/NewVenues";
import { PopularDestinations } from "../components/PopularDestinations";
import { WhyChooseHolidaze } from "../components/WhyChooseHolidaze";
import { Hero } from "./../components/Hero";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <NewVenues />
      <PopularDestinations />
      <WhyChooseHolidaze />
      <CTASection />
    </>
  );
};
