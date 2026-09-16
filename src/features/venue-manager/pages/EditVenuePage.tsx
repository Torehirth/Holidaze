import { ArrowLeft, Edit3 } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import { VenueForm } from "../components/VenueForm";
import { editVenue } from "../services/editVenue";
import { useAuth } from "../../auth/hooks/useAuth";
import { useEffect, useState } from "react";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";
import { Loader } from "../../../shared/components/ui/Loader";
import type { Venue } from "../../venues/types/venue";
import { getVenue } from "./../../venues/services/getVenue";
import { mapVenueToFormValues } from "../utils/mapVenueToFormValues";
import type { VenueFormValues } from "../types/form";

export const EditVenuePage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [venue, setVenue] = useState<Venue>();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const handleLoadVenue = async () => {
      if (!id) {
        return;
      }

      try {
        setError(null);

        const result = await getVenue(id);
        setVenue(result.data);
      } catch (caughtError) {
        if (caughtError instanceof Error) {
          setError(caughtError.message);
        } else {
          setError("Could not get the venue.");
        }
      }
    };
    handleLoadVenue();
  }, [id]);

  // -------
  if (loading) {
    return <Loader />;
  }

  if (!venue) {
    return error ? <FeedbackMessage variant="error" message={error} /> : null;
  }
  const existingFormValues = mapVenueToFormValues(venue);
  // -------

  const handleEditVenue = async (newFormData: VenueFormValues) => {
    if (!currentUser || !id) {
      return;
    }

    const payload = {
      ...newFormData,
      media: newFormData.media[0]?.url ? newFormData.media : [],
    };

    try {
      setError(null);
      setLoading(true);

      await editVenue(payload, currentUser, id);
      navigate("/host");
    } catch (caughtError) {
      if (caughtError instanceof Error) {
        setError(caughtError.message);
      } else {
        setError("Could not edit the venue.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>{venue.name ? `Edit ${venue.name}` : `Edit Venue | Holidaze`}</title>
      <meta name="description" content="Update your venue's details." />
      <meta name="robots" content="noindex, nofollow" />

      <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {error && <FeedbackMessage variant="error" message={error} />}
        {loading && <Loader />}
        <Link to="/host" className="mb-6 inline-flex items-center gap-2 text-sm hover:opacity-70">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to venue management
        </Link>
        <section className="mb-8 rounded-2xl border border-sky-200 bg-linear-to-br from-sky-100 to-stone-50 p-6 sm:p-8">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-200">
            <Edit3 aria-hidden="true" className="h-5 w-5" />
          </div>
          <h1 className="text-3xl font-medium">Edit the {venue.name} venue</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Update the information guests see when viewing the {venue.name}.
          </p>
        </section>
        <VenueForm
          submitLabel="Save changes"
          defaultValues={existingFormValues}
          onFormSubmit={handleEditVenue}
        />
      </div>
    </>
  );
};
