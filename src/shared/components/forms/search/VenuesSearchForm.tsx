import { Search } from "lucide-react";
import { useState, type SyntheticEvent } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../ui/buttons/Button";
import { FeedbackMessage } from "../../ui/feedback/FeedbackMessage";

type VenuesSearchFormProps = {
  variant?: "primary" | "secondary";
};

export const VenuesSearchForm = ({ variant = "primary" }: VenuesSearchFormProps) => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const trimmedQuery = query.trim();
    if (trimmedQuery === "") {
      setShowWarning(true);
      return;
    }

    const encodedQuery = encodeURIComponent(trimmedQuery);

    navigate(trimmedQuery ? `/venues?q=${encodedQuery}` : "/venues");
  };

  const getVariantClass = () => {
    if (variant === "primary") {
      return "bg-background/80 mx-auto flex max-w-4xl flex-col justify-between gap-4 rounded-2xl p-8 shadow-lg lg:w-fit lg:flex-row lg:items-center";
    } else if (variant === "secondary") {
      return "bg-background mx-auto flex max-w-4xl  flex-col justify-between gap-4 rounded-2xl p-8  lg:w-fit lg:flex-row lg:items-center";
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={getVariantClass()} aria-label="Search for venues">
        <div className="relative">
          <label htmlFor="venue-search" className="sr-only">
            Search venues
          </label>

          <input
            id="venue-search"
            name="venue-search"
            onChange={(event) => {
              setQuery(event.target.value);
              setShowWarning(false);
            }}
            type="search"
            autoComplete="off"
            placeholder="Search for a venue"
            className="h-14 w-full flex-2 rounded-2xl border border-stone-200 bg-stone-50 pr-6 pl-16 text-lg text-stone-900 shadow-sm outline-none placeholder:text-stone-500 focus:border-stone-500 focus:ring-2 focus:ring-stone-300 lg:min-w-125 lg:pl-6"
          />
        </div>

        <Button type="submit">
          <Search aria-hidden="true" className="mr-2 size-6" />
          Search
        </Button>
      </form>
      {query.trim() === "" && showWarning && (
        <div className="mx-auto -mt-4 mb-2 flex max-w-4xl justify-center text-center">
          <FeedbackMessage variant="warning" message="Please enter a search value" />
        </div>
      )}
    </>
  );
};
