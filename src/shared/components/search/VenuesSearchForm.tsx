import { CalendarDays, MapPin, Search } from "lucide-react";
import { useRef } from "react";

export const VenuesSearchForm = () => {
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  const openCheckInPicker = () => {
    checkInRef.current?.showPicker?.();
  };

  const openCheckOutPicker = () => {
    checkOutRef.current?.showPicker?.();
  };

  return (
    <form
      // onSubmit={handleSubmit}
      className="bg-background/80 mx-auto flex w-[90%] max-w-6xl flex-col gap-4 rounded-2xl p-8 shadow-lg lg:w-full lg:flex-row lg:items-center"
      aria-label="Search for venues">
      <div className="relative">
        <label htmlFor="destination" className="sr-only">
          Destination
        </label>

        <MapPin
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-6 size-5 -translate-y-1/2 text-stone-500 lg:hidden"
        />

        <input
          id="destination"
          name="destination"
          type="search"
          placeholder="Where to?"
          className="h-14 w-full flex-2 rounded-2xl border border-stone-200 bg-stone-50 pr-6 pl-16 text-lg text-stone-900 shadow-sm outline-none placeholder:text-stone-500 focus:border-stone-500 focus:ring-2 focus:ring-stone-300 lg:pl-6"
        />
      </div>

      <div className="relative" onClick={openCheckInPicker}>
        <label htmlFor="check-in" className="sr-only">
          Check-in date
        </label>

        <CalendarDays
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-6 size-5 -translate-y-1/2 text-stone-500"
        />

        <input
          id="check-in"
          ref={checkInRef}
          name="checkIn"
          type="date"
          className="h-14 w-full cursor-pointer rounded-2xl border border-stone-200 bg-stone-50 pr-6 pl-16 text-lg text-stone-500 shadow-sm outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-300"
        />
      </div>

      <div className="relative" onClick={openCheckOutPicker}>
        <label htmlFor="check-out" className="sr-only">
          Check-out date
        </label>

        <CalendarDays
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-6 size-5 -translate-y-1/2 text-stone-500"
        />

        <input
          id="check-out"
          ref={checkOutRef}
          name="checkOut"
          type="date"
          className="h-14 w-full cursor-pointer rounded-2xl border border-stone-200 bg-stone-50 pr-6 pl-16 text-lg text-stone-500 shadow-sm outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-300 lg:w-full"
        />
      </div>

      <button
        type="submit"
        className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-stone-900 px-12 text-lg font-medium text-white shadow-md transition hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 active:scale-[0.99] lg:w-62">
        <Search aria-hidden="true" className="size-6" />
        Search
      </button>
    </form>
  );
};
