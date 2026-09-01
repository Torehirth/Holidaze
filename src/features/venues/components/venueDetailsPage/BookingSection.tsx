import { useState } from "react";
import type { VenueSectionProps } from "../../types/venue";
import { Button } from "../../../../shared/components/ui/buttons/Button";
import { Minus, Plus } from "lucide-react";
import { useAuth } from "../../../auth/hooks/useAuth";
import { NavLink } from "react-router";
import { BookingCalendar } from "./BookingCalendar";
import type { DateRange } from "@daypicker/react";
import { formatDate } from "../../../../shared/utils/formatDate";

export const BookingSection = ({ venue }: VenueSectionProps) => {
  const [guests, setGuests] = useState(1);
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const { currentUser } = useAuth();

  console.log(venue.bookings);

  const bookedDateRanges =
    venue.bookings?.map((booking) => ({
      from: new Date(booking.dateFrom),
      to: new Date(booking.dateTo),
    })) ?? [];

  const checkInDate = selectedRange?.from ? formatDate(selectedRange.from) : "Select a date";

  const checkOutDate = selectedRange?.to ? formatDate(selectedRange.to) : "Select a date";

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
        <div>
          <BookingCalendar
            selectedRange={selectedRange}
            onRangeChange={setSelectedRange}
            bookedDateRanges={bookedDateRanges}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-gray-400 p-3">
            <p className="text-sm">Check-in</p>
            <p className="font-medium">{checkInDate}</p>
          </div>
          <div className="rounded-xl border border-gray-400 p-3">
            <p className="text-sm">Check-out</p>
            <p className="font-medium">{checkOutDate}</p>
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
              className="bg-background no-spinner pointer-events-none w-full max-w-20 rounded-xl border border-gray-400 px-3 py-2 text-right font-medium"
            />
            <div className="flex items-center gap-2">
              <div></div>
              <button type="button" onClick={() => changeGuests(1)}>
                <Plus className="rounded-xl border hover:scale-95 active:opacity-70" />
              </button>
              <button type="button" onClick={() => changeGuests(-1)}>
                <Minus className="rounded-xl border hover:scale-95 active:opacity-70" />
              </button>
            </div>
          </div>
        </div>
        {venue.maxGuests === guests && (
          <p className="text-destructive -mt-2 flex items-center text-sm">
            Maximum number of guests reached
          </p>
        )}
        <div className="w-full">
          {!currentUser ? (
            <NavLink to="/login">
              <Button variant="primary" type="submit">
                Log in
              </Button>
            </NavLink>
          ) : (
            <Button variant="primary" type="submit">
              Book now
            </Button>
          )}
        </div>
      </form>
      {!currentUser && (
        <p className="text-destructive mt-4 text-center text-sm">
          Log in to complete your booking.
        </p>
      )}
    </aside>
  );
};
