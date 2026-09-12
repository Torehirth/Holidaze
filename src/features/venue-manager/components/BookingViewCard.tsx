import { CalendarDays, Mail, Users } from "lucide-react";
import type { Booking } from "../../profile/types/bookings";
import { Link } from "react-router";
import placeholderProfile from "../../../shared/assets/images/placeholder_profile.webp";

type BookingCardProps = {
  booking: Booking;
};

export const BookingViewCard = ({ booking }: BookingCardProps) => {
  return (
    <article className="bg-card rounded-2xl border border-gray-400 p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="bg-accent flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl">
          <span className="text-xs font-medium uppercase">
            {new Intl.DateTimeFormat("en-US", { month: "short" }).format(
              new Date(booking.dateFrom)
            )}
          </span>
          <span className="text-xl font-semibold">
            {new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(
              new Date(booking.dateFrom)
            )}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="overflow-hidden text-sm text-ellipsis whitespace-nowrap">
                Booking id: {booking.id}
              </p>
              <Link
                to={`/profiles/${booking.customer?.name}`}
                className="mt-3 flex items-center gap-2">
                <img
                  src={booking.customer?.avatar?.url ?? placeholderProfile}
                  alt={booking.customer?.avatar?.alt ?? "Owners avatar"}
                  className="h-14 w-14 rounded-full object-cover hover:opacity-80 active:scale-[0.99]"
                />

                <h3 className="overflow-hidden text-lg font-medium text-ellipsis whitespace-nowrap hover:opacity-80 active:scale-[0.99]">
                  {booking.customer?.name || "Unknown user"}
                </h3>
              </Link>
            </div>

            <span className="w-fit rounded-full bg-green-200 px-3 py-1 text-sm font-medium">
              Upcoming
            </span>
          </div>

          <dl className="mt-5 grid gap-4 border-t border-gray-300 pt-5 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-medium text-stone-900">Stay</dt>

              <dd className="mt-1 flex items-center gap-2">
                <CalendarDays aria-hidden="true" className="h-4 w-4 shrink-0" />
                {`${new Date(booking.dateFrom).toLocaleDateString("nb-NO", { year: "numeric", month: "short", day: "2-digit" })}
                - ${new Date(booking.dateFrom).toLocaleDateString("nb-NO", { year: "numeric", month: "short", day: "2-digit" })}`}
              </dd>
            </div>

            <div>
              <dt className="font-medium text-stone-900">Guests</dt>

              <dd className="mt-1 flex items-center gap-2">
                <Users aria-hidden="true" className="h-4 w-4 shrink-0" />
                {`${booking.guests} guests`}
              </dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="font-medium text-stone-900">Guest email</dt>

              <dd className="mt-1 flex items-center gap-2">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                {booking.customer?.email || "Email not found"}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
};
