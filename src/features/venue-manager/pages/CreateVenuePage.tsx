import { ArrowLeft, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { VenueForm } from "../components/VenueForm";
import { useState } from "react";
import { createVenue } from "../services/createVenue";
import { FeedbackMessage } from "../../../shared/components/ui/feedback/FeedbackMessage";
import { useAuth } from "../../auth/hooks/useAuth";
import type { VenueFormValues } from "../types/form";

export const CreateVenuePage = () => {
  const [error, setError] = useState<string | null>(null);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleCreateVenue = async (data: VenueFormValues) => {
    if (!currentUser) {
      return;
    }

    const payload = {
      ...data,
      media: data.media[0]?.url ? data.media : [],
    };

    try {
      setError(null);

      await createVenue(payload, currentUser);
      navigate("/host");
    } catch (caughtError) {
      if (caughtError instanceof Error) {
        setError(caughtError.message);
      } else {
        setError("Could not create the venue.");
      }
    }
  };

  return (
    <>
      <title>Create a venue | Holidaze</title>
      <meta name="description" content="List a new venue on Holidaze." />
      <meta name="robots" content="noindex, nofollow" />

      <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {error && <FeedbackMessage variant="error" message={error} />}
        <Link to="/host" className="mb-6 flex items-center gap-2 text-sm hover:opacity-70">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to venue management
        </Link>
        <section className="to-accent from-background mb-8 rounded-2xl border border-amber-200 bg-linear-to-t p-6 sm:p-8">
          <div className="bg-primary/10 mb-4 flex h-11 w-11 items-center justify-center rounded-xl">
            <Plus aria-hidden="true" className="h-5 w-5" />
          </div>
          <h1 className="text-3xl font-medium">Create a new venue</h1>
          <p className="mt-2 max-w-2xl">
            Add the details guests need to discover and book your venue.
          </p>
        </section>
        <VenueForm submitLabel="Create venue" onFormSubmit={handleCreateVenue} />
      </div>
    </>
  );
};
