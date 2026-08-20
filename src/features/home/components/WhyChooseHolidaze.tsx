import { BadgeCheck, ShieldCheck, Headphones } from "lucide-react";

export const WhyChooseHolidaze = () => {
  return (
    <section
      className="mx-auto w-[90%] max-w-6xl py-16"
      aria-labelledby="why-choose-holidaze-heading">
      <div className="mb-10 text-center">
        <h2
          id="why-choose-holidaze-heading"
          className="text-foreground text-xl font-medium">
          Why Choose Holidaze
        </h2>
        <p className="mt-2 text-sm">Experience the difference</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="text-center">
          <div className="bg-secondary mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
            <BadgeCheck aria-hidden="true" className="h-6 w-6" />
          </div>
          <h3 className="text-foreground text-base font-medium">Best Price Guarantee</h3>
          <p className="mt-2 text-sm">Find a lower price and we&apos;ll match it</p>
        </div>

        <div className="text-center">
          <div className="bg-secondary mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
            <ShieldCheck aria-hidden="true" className="h-6 w-6" />
          </div>
          <h3 className="text-foreground text-base font-medium">Verified Properties</h3>
          <p className="mt-2 text-sm">Browse trusted stays from verified hosts</p>
        </div>

        <div className="text-center">
          <div className="bg-secondary mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
            <Headphones aria-hidden="true" className="h-6 w-6" />
          </div>
          <h3 className="text-foreground text-base font-medium">24/7 Support</h3>
          <p className="mt-2 text-sm">We&apos;re here to help whenever you need it</p>
        </div>
      </div>
    </section>
  );
};
