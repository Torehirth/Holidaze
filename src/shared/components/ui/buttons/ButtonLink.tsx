import { Link } from "react-router";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  to: string;
  variant: "primary" | "secondary";
  children: ReactNode;
};

/**
 * A reusable React Router link styled as a button.
 *
 * @example
 * <ButtonLink to="/venues" variant="primary">
 *   Browse Venues
 * </ButtonLink>
 *
 * @example
 * <ButtonLink to="/" variant="secondary">
 *   <Home className="h-5 w-5" /> (Lucide icon)
 *   Back to Home
 * </ButtonLink>
 */
export const ButtonLink = ({ to, variant, children }: ButtonLinkProps) => {
  const baseClasses =
    "inline-flex items-center capitalize justify-center gap-2 rounded-2xl px-6 py-3 font-medium shadow-md transition-colors transition-transform hover:scale-[1.02] active:opacity-50";

  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-background text-foreground border border-border",
  };

  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
};
