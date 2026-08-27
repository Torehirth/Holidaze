import type { VenueSectionProps } from "../../../../shared/types/venue";

export const AboutSection = ({ venue }: VenueSectionProps) => {
  return (
    <section className="border-b border-gray-400 pb-8">
      <h2 className="mb-3 text-xl font-medium">About this venue</h2>
      <p>{venue.description}</p>
    </section>
  );
};
