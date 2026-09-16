import { CTASection } from "../components/CTASection";
import { NewStays } from "../components/NewStays";
import { WhyChooseHolidaze } from "../components/WhyChooseHolidaze";
import { Hero } from "./../components/Hero";

export const HomePage = () => {
  return (
    <>
      <title>Holidaze — Find your next stay</title>
      <meta
        name="description"
        content="Browse unique venues and book your next holiday with Holidaze."
      />
      <link rel="canonical" href="https://tmh-holidaze.netlify.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Holidaze — Find your next stay" />
      <meta
        property="og:description"
        content="Browse unique venues and book your next holiday with Holidaze."
      />
      <meta property="og:image" content="https://tmh-holidaze.netlify.app/default_meta_og.jpg" />
      <meta property="og:url" content="https://tmh-holidaze.netlify.app/" />
      <Hero />
      <NewStays />
      <WhyChooseHolidaze />
      <CTASection />
    </>
  );
};
