import { Car, Coffee, Image, MapPin, PawPrint, Wifi } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../../../shared/components/ui/buttons/Button";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { VenueFormValues } from "../types/form";
import { errorInputStyles, inputStyles } from "../constants/styleVariables";
import { emptyVenueFormValues } from "../constants/emptyVenueFormValues";

export type VenueFormProps = {
  submitLabel: string;
  onFormSubmit: SubmitHandler<VenueFormValues>;
  defaultValues?: VenueFormValues;
};

export const VenueForm = ({
  submitLabel,
  onFormSubmit: onFormSubmit,
  defaultValues,
}: VenueFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: defaultValues ?? emptyVenueFormValues,
    mode: "onChange",
  });

  return (
    <>
      <form className="space-y-8" onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <section
          aria-labelledby="venue-details-heading"
          className="bg-card rounded-2xl border border-gray-400 p-5 shadow-sm sm:p-8">
          <div className="mb-6">
            <h2 id="venue-details-heading" className="text-xl font-medium">
              Venue details
            </h2>
            <p className="mt-1 text-sm">
              Add the main information guests will see when viewing your venue.
            </p>
          </div>
          <div className="space-y-5">
            <div>
              <label htmlFor="venue-name" className="text-sm font-medium">
                Venue name
              </label>
              <input
                id="venue-name"
                type="text"
                placeholder="Mountain View Cabin"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "venue-name-error" : undefined}
                className={`${inputStyles} ${errors.name ? errorInputStyles : ""}`}
                {...register("name", {
                  required: "Please enter a venue name.",
                  minLength: {
                    value: 3,
                    message: "Venue name must contain at least 3 characters.",
                  },
                  maxLength: {
                    value: 50,
                    message: "Venue name cannot exceed 50 characters.",
                  },
                })}
              />

              {errors.name && (
                <p id="venue-name-error" className="text-destructive mt-2 text-sm">
                  {String(errors.name.message)}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="venue-description" className="text-sm font-medium">
                Description
              </label>

              <textarea
                id="venue-description"
                rows={4}
                placeholder="Describe the venue, its surroundings and what makes it special..."
                aria-invalid={Boolean(errors.description)}
                aria-describedby={
                  errors.description ? "venue-description-error" : "venue-description-help"
                }
                className={`${inputStyles} resize-y ${errors.description ? errorInputStyles : ""}`}
                {...register("description", {
                  required: "Please enter a venue description.",
                  minLength: {
                    value: 10,
                    message: "Description must contain at least 10 characters.",
                  },
                  maxLength: {
                    value: 160,
                    message: "Description cannot exceed 160 characters.",
                  },
                })}
              />
              {errors.description ? (
                <p id="venue-description-error" className="text-destructive mt-2 text-sm">
                  {String(errors.description.message)}
                </p>
              ) : (
                <p id="venue-description-help" className="text-muted-foreground mt-2 text-sm">
                  Include useful information about the property and the surrounding area.
                </p>
              )}
            </div>
          </div>
        </section>
        <section
          aria-labelledby="venue-media-heading"
          className="bg-card rounded-2xl border border-gray-400 p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="bg-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
              <Image aria-hidden="true" className="h-5 w-5" />
            </div>
            <div>
              <h2 id="venue-media-heading" className="text-xl font-medium">
                Venue image
              </h2>
              <p className="mt-1 text-sm">Add a publicly accessible image URL.</p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="venue-image-url" className="text-sm font-medium">
                Image URL
              </label>
              <input
                id="venue-image-url"
                type="url"
                inputMode="url"
                placeholder="https://example.com/venue.jpg"
                aria-invalid={Boolean(errors.media?.[0]?.url)}
                aria-describedby={errors.media?.[0]?.url ? "venue-image-url-error" : undefined}
                className={`${inputStyles} ${errors.media?.[0]?.url ? errorInputStyles : ""}`}
                {...register("media.0.url", {
                  validate: (value) => {
                    try {
                      if (!value) {
                        return;
                      }

                      const url = new URL(value);

                      if (url.protocol !== "http:" && url.protocol !== "https:") {
                        return "Please enter a valid HTTP or HTTPS URL.";
                      }

                      return true;
                    } catch {
                      return "Please enter a valid image URL.";
                    }
                  },
                })}
              />
              {errors.media?.[0]?.url && (
                <p id="venue-image-url-error" className="text-destructive mt-2 text-sm">
                  {String(errors.media?.[0]?.url.message)}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="venue-image-alt" className="text-sm font-medium">
                Alternative text
              </label>
              <input
                id="venue-image-alt"
                type="text"
                placeholder="Cabin surrounded by mountains"
                aria-invalid={Boolean(errors.media?.[0]?.alt)}
                aria-describedby={
                  errors.media?.[0]?.alt ? "venue-image-alt-error" : "venue-image-alt-help"
                }
                className={`${inputStyles} ${errors.media?.[0]?.alt ? errorInputStyles : ""}`}
                {...register("media.0.alt", {
                  maxLength: {
                    value: 120,
                    message: "Alternative text cannot exceed 120 characters.",
                  },
                })}
              />
              {errors.media?.[0]?.alt ? (
                <p id="venue-image-alt-error" className="text-destructive mt-2 text-sm">
                  {String(errors.media?.[0]?.alt.message)}
                </p>
              ) : (
                <p id="venue-image-alt-help" className="text-muted-foreground mt-2 text-sm">
                  Briefly describe what is shown in the image.
                </p>
              )}
            </div>
          </div>
        </section>
        <section
          aria-labelledby="booking-details-heading"
          className="bg-card rounded-2xl border border-gray-400 p-5 shadow-sm sm:p-8">
          <div className="mb-6">
            <h2 id="booking-details-heading" className="text-xl font-medium">
              Price and capacity
            </h2>
            <p className="mt-1 text-sm">
              Set the nightly price and the number of guests the venue can accommodate.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="venue-price" className="text-sm font-medium">
                Price per night
              </label>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="text-muted-foreground absolute top-1/2 left-4 mt-1 -translate-y-1/2">
                  $
                </span>
                <input
                  id="venue-price"
                  type="number"
                  min={0}
                  step={1}
                  aria-invalid={Boolean(errors.price)}
                  aria-describedby={errors.price ? "venue-price-error" : undefined}
                  className={`${inputStyles} pl-8 ${errors.price ? errorInputStyles : ""}`}
                  {...register("price", {
                    valueAsNumber: true,
                    required: "Please enter a price.",
                    min: {
                      value: 0,
                      message: "Price cannot be lower than 0.",
                    },
                    max: {
                      value: 10000,
                      message: "Price cannot exceed 10,000.",
                    },
                  })}
                />
              </div>
              {errors.price && (
                <p id="venue-price-error" className="text-destructive mt-2 text-sm">
                  {String(errors.price.message)}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="venue-max-guests" className="text-sm font-medium">
                Maximum guests
              </label>
              <input
                id="venue-max-guests"
                type="number"
                min={1}
                max={20}
                step={1}
                aria-invalid={Boolean(errors.maxGuests)}
                aria-describedby={errors.maxGuests ? "venue-max-guests-error" : undefined}
                className={`${inputStyles} ${errors.maxGuests ? errorInputStyles : ""}`}
                {...register("maxGuests", {
                  valueAsNumber: true,
                  required: "Please enter the maximum number of guests.",
                  min: {
                    value: 1,
                    message: "The venue must allow at least one guest.",
                  },
                  max: {
                    value: 20,
                    message: "Maximum guests cannot exceed 20.",
                  },
                  validate: (value) =>
                    Number.isInteger(value) || "Maximum guests must be a whole number.",
                })}
              />
              {errors.maxGuests && (
                <p id="venue-max-guests-error" className="text-destructive mt-2 text-sm">
                  {String(errors.maxGuests.message)}
                </p>
              )}
            </div>
          </div>
        </section>
        <section
          aria-labelledby="facilities-heading"
          className="bg-card rounded-2xl border border-gray-400 p-5 shadow-sm sm:p-8">
          <div className="mb-6">
            <h2 id="facilities-heading" className="text-xl font-medium">
              Facilities and offerings
            </h2>
            <p className="mt-1 text-sm">Select all the facilities available at the venue.</p>
          </div>
          <fieldset>
            <legend className="sr-only">Available facilities</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-300 p-4 transition hover:bg-stone-50">
                <input
                  type="checkbox"
                  className="accent-primary h-4 w-4 shrink-0"
                  {...register("meta.wifi")}
                />
                <Wifi aria-hidden="true" className="h-5 w-5" />
                <span className="font-medium">Wi-Fi</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-300 p-4 transition hover:bg-stone-50">
                <input
                  type="checkbox"
                  className="accent-primary h-4 w-4 shrink-0"
                  {...register("meta.parking")}
                />
                <Car aria-hidden="true" className="h-5 w-5" />
                <span className="font-medium">Parking</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-300 p-4 transition hover:bg-stone-50">
                <input
                  type="checkbox"
                  className="accent-primary h-4 w-4 shrink-0"
                  {...register("meta.breakfast")}
                />
                <Coffee aria-hidden="true" className="h-5 w-5" />
                <span className="font-medium">Breakfast</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-300 p-4 transition hover:bg-stone-50">
                <input
                  type="checkbox"
                  className="accent-primary h-4 w-4 shrink-0"
                  {...register("meta.pets")}
                />
                <PawPrint aria-hidden="true" className="h-5 w-5" />
                <span className="font-medium">Pets allowed</span>
              </label>
            </div>
          </fieldset>
        </section>
        <section
          aria-labelledby="location-heading"
          className="bg-card rounded-2xl border border-gray-400 p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
              <MapPin aria-hidden="true" className="h-5 w-5" />
            </div>
            <div>
              <h2 id="location-heading" className="text-xl font-medium">
                Location
              </h2>
              <p className="mt-1 text-sm">Help guests understand where the venue is located.</p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="venue-address" className="text-sm font-medium">
                Address <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <input
                id="venue-address"
                type="text"
                placeholder="123 Mountain Road"
                aria-invalid={Boolean(errors?.location?.address)}
                aria-describedby={errors?.location?.address ? "venue-address-error" : undefined}
                className={`${inputStyles} ${errors?.location?.address ? errorInputStyles : ""}`}
                {...register("location.address", {
                  maxLength: {
                    value: 100,
                    message: "Address cannot exceed 100 characters.",
                  },
                })}
              />
              {errors?.location?.address && (
                <p id="venue-address-error" className="text-destructive mt-2 text-sm">
                  {String(errors?.location?.address?.message)}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="venue-city" className="text-sm font-medium">
                City
              </label>
              <input
                id="venue-city"
                type="text"
                placeholder="Voss"
                aria-invalid={Boolean(errors?.location?.city)}
                aria-describedby={errors?.location?.city ? "venue-city-error" : undefined}
                className={`${inputStyles} ${errors?.location?.city ? errorInputStyles : ""}`}
                {...register("location.city", {
                  maxLength: {
                    value: 50,
                    message: "City cannot exceed 50 characters.",
                  },
                })}
              />
              {errors?.location?.city && (
                <p id="venue-city-error" className="text-destructive mt-2 text-sm">
                  {String(errors?.location?.city?.message)}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="venue-zip" className="text-sm font-medium">
                ZIP code <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <input
                id="venue-zip"
                type="text"
                placeholder="5700"
                aria-invalid={Boolean(errors?.location?.zip)}
                aria-describedby={errors?.location?.zip ? "venue-zip-error" : undefined}
                className={`${inputStyles} ${errors?.location?.zip ? errorInputStyles : ""}`}
                {...register("location.zip", {
                  maxLength: {
                    value: 20,
                    message: "ZIP code cannot exceed 20 characters.",
                  },
                })}
              />
              {errors?.location?.zip && (
                <p id="venue-zip-error" className="text-destructive mt-2 text-sm">
                  {String(errors?.location?.zip?.message)}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="venue-country" className="text-sm font-medium">
                Country
              </label>
              <input
                id="venue-country"
                type="text"
                placeholder="Norway"
                aria-invalid={Boolean(errors?.location?.country)}
                aria-describedby={errors?.location?.country ? "venue-country-error" : undefined}
                className={`${inputStyles} ${errors?.location?.country ? errorInputStyles : ""}`}
                {...register("location.country", {
                  maxLength: {
                    value: 50,
                    message: "Country cannot exceed 50 characters.",
                  },
                })}
              />
              {errors?.location?.country && (
                <p id="venue-country-error" className="text-destructive mt-2 text-sm">
                  {String(errors?.location?.country.message)}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="venue-continent" className="text-sm font-medium">
                Continent <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <input
                id="venue-continent"
                type="text"
                placeholder="Europe"
                aria-invalid={Boolean(errors?.location?.continent)}
                aria-describedby={errors?.location?.continent ? "venue-continent-error" : undefined}
                className={`${inputStyles} ${errors?.location?.continent ? errorInputStyles : ""}`}
                {...register("location.continent", {
                  maxLength: {
                    value: 50,
                    message: "Continent cannot exceed 50 characters.",
                  },
                })}
              />
              {errors?.location?.continent && (
                <p id="venue-continent-error" className="text-destructive mt-2 text-sm">
                  {String(errors?.location?.continent.message)}
                </p>
              )}
            </div>
          </div>
        </section>
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Link
            to="/host"
            className="border-primary text-primary flex items-center justify-center rounded-xl border px-6 py-3 font-medium transition hover:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none">
            Cancel
          </Link>
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? `Submitting...` : `${submitLabel}`}
          </Button>
        </div>
      </form>
    </>
  );
};
