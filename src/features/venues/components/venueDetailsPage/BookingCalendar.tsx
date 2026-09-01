import { DayPicker, type DateRange } from "@daypicker/react";
import "@daypicker/react/style.css";

type BookingCalendarProps = {
  selectedRange: DateRange | undefined;
  onRangeChange: (range: DateRange | undefined) => void;
  bookedDateRanges: DateRange[];
};
export const BookingCalendar = ({
  selectedRange,
  onRangeChange,
  bookedDateRanges,
}: BookingCalendarProps) => {
  return (
    <DayPicker
      mode="range"
      selected={selectedRange}
      onSelect={onRangeChange}
      disabled={[{ before: new Date() }, ...bookedDateRanges]}
      excludeDisabled
      min={1}
    />
  );
};
