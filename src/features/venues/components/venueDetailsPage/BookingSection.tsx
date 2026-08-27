import { useState } from "react";
import type { VenueSectionProps } from "../../../../shared/types/venue";
import { Button } from "../../../../shared/components/ui/buttons/Button";
import { Minus, Plus } from "lucide-react";

export const BookingSection = ({ venue }: VenueSectionProps) => {
  const [guests, setGuests] = useState(1);

  const changeGuests = (change: number) => {
    if (!venue) {
      return;
    }

    setGuests((currentGuests) => {
      const newGuests = currentGuests + change;
      if (newGuests < 1) {
        return 1;
      }
      if (newGuests > venue.maxGuests) {
        return venue.maxGuests;
      }
      return newGuests;
    });
  };
  return (
    <aside className="bg-card rounded-2xl border border-gray-400 p-6 shadow-md lg:sticky lg:top-64">
      <div className="mb-6 flex items-baseline gap-1">
        <span aria-label="Price per night" className="text-2xl font-medium">
          ${venue.price}
        </span>
        <span aria-hidden="true">/ night</span>
      </div>
      <form aria-label="Book this venue" className="space-y-4">
        <div className="grid grid-rows-2 gap-3 lg:grid-cols-2 lg:grid-rows-1">
          <div>
            <label htmlFor="check-in" className="mb-1 block text-sm font-medium">
              Check-in
            </label>
            <input
              id="check-in"
              name="dateFrom"
              type="date"
              className="bg-background w-full rounded-xl border border-gray-400 px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="check-out" className="mb-1 block text-sm font-medium">
              Check-out
            </label>
            <input
              id="check-out"
              name="dateTo"
              type="date"
              className="bg-background w-full rounded-xl border border-gray-400 px-3 py-2"
            />
          </div>
        </div>
        <div>
          <label htmlFor="guests" className="mb-1 block text-sm font-medium">
            Guests
          </label>
          <div className="flex gap-4">
            <input
              readOnly
              type="number"
              id="guests"
              name="guests"
              min="1"
              max={venue.maxGuests}
              value={guests}
              className="bg-background no-spinner pointer-events-none w-full max-w-20 rounded-xl border border-gray-400 px-3 py-2 text-right"
            />
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => changeGuests(1)}>
                <Plus className="rounded-xl border hover:scale-95 active:opacity-70" />
              </button>
              <button type="button" onClick={() => changeGuests(-1)}>
                <Minus className="rounded-xl border hover:scale-95 active:opacity-70" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Button variant="primary" type="submit">
            Book now
          </Button>
        </div>
      </form>
      <p className="text-destructive mt-4 text-center text-sm">
        Sign in to complete your booking.
      </p>
    </aside>
  );
};
