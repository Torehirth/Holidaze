import { CTASection } from "../components/CTASection";
import { NewStays } from "../components/NewStays";
import { PopularDestinations } from "../components/PopularDestinations";
import { WhyChooseHolidaze } from "../components/WhyChooseHolidaze";
import { Hero } from "./../components/Hero";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <NewStays />
      <PopularDestinations />
      <WhyChooseHolidaze />
      <CTASection />
    </>
  );
};
