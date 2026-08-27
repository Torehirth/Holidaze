import { Car, Check, Coffee, PawPrint, Wifi } from "lucide-react";
import type { VenueSectionProps } from "../../../../shared/types/venue";

export const Facilities = ({ venue }: VenueSectionProps) => {
  return (
    <section className="border-b border-gray-400 pb-8">
      <h2 className="mb-4 text-xl font-medium">Facilities and amenities</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {venue.meta.wifi ? (
          <li className="flex items-center gap-3">
            <Wifi aria-hidden="true" className="h-5 w-5" />
            Wi-Fi <Check className="h-6 w-6 text-green-700" />
          </li>
        ) : (
          ""
        )}
        {venue.meta.parking ? (
          <li className="flex items-center gap-3">
            <Car aria-hidden="true" className="h-5 w-5" />
            Parking <Check className="h-6 w-6 text-green-700" />
          </li>
        ) : (
          ""
        )}
        {venue.meta.breakfast ? (
          <li className="flex items-center gap-3">
            <Coffee aria-hidden="true" className="h-5 w-5" />
            Breakfast <Check className="h-6 w-6 text-green-700" />
          </li>
        ) : (
          ""
        )}
        {venue.meta.pets ? (
          <li className="flex items-center gap-3">
            <PawPrint aria-hidden="true" className="h-5 w-5" />
            Pets allowed <Check className="h-6 w-6 text-green-700" />
          </li>
        ) : (
          ""
        )}
      </ul>
    </section>
  );
};
