import { useState, type SubmitEvent } from "react";
import { Button } from "../../../../shared/components/ui/buttons/Button";
import { Minus, Plus } from "lucide-react";
import { useAuth } from "../../../auth/hooks/useAuth";
import { NavLink } from "react-router";
import { BookingCalendar } from "./BookingCalendar";
import type { DateRange } from "@daypicker/react";
import { formatDate } from "../../../../shared/utils/formatDate";
import { bookVenue } from "../../services/bookVenue";
import { FeedbackMessage } from "../../../../shared/components/ui/feedback/FeedbackMessage";
import type { BookingSectionProps } from "../../types/venue";

export const BookingSection = ({ venue, onBookingCreated }: BookingSectionProps) => {
  const [guests, setGuests] = useState(1);
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { currentUser } = useAuth();

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!currentUser) {
      setError("You must be logged in to create a booking.");
      return;
    }

    if (!selectedRange?.from || !selectedRange?.to) {
      setError("Please select both a check-in and a check-out date.");
      return;
    }

    const bookingData = {
      accessToken: currentUser.accessToken,
      dateFrom: selectedRange.from.toISOString(),
      dateTo: selectedRange.to.toISOString(),
      guests: guests,
      venueId: venue.id,
    };

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      await bookVenue(bookingData);
      await onBookingCreated();
      setGuests(1);
      setSelectedRange(undefined);
      setSuccess("Successfully booked your stay!🎉");
    } catch (caughtError) {
      if (caughtError instanceof Error) {
        setError(caughtError.message);
      } else {
        setError("Failed to book venue. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const bookedDateRanges =
    venue.bookings?.map((booking) => ({
      from: new Date(booking.dateFrom),
      to: new Date(booking.dateTo),
    })) ?? [];

  const checkInDate = selectedRange?.from ? formatDate(selectedRange.from) : "Select a date";

  const checkOutDate = selectedRange?.to ? formatDate(selectedRange.to) : "Select a date";

  const changeGuests = (change: number) => {
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
      <form aria-label="Book this venue" className="space-y-4" onSubmit={handleSubmit}>
        {success && <FeedbackMessage variant="success" message={success} />}
        {error && <FeedbackMessage variant="error" message={error} />}
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
              <button type="button" onClick={() => changeGuests(1)} aria-label="Add guest">
                <Plus className="rounded-xl border hover:scale-95 active:opacity-70" />
              </button>
              <button type="button" onClick={() => changeGuests(-1)} aria-label="Remove guest">
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
            <NavLink
              to="/login"
              className="border-primary text-primary hover:text-foreground flex w-full items-center justify-center rounded-xl border px-6 py-3 font-medium transition-colors hover:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50">
              Log in
            </NavLink>
          ) : venue.owner.name === currentUser?.userName ? (
            <FeedbackMessage variant="error" message="Not able to book your own venue" />
          ) : (
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Booking..." : "Book now"}
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
