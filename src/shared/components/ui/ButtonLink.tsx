import { Link } from "react-router";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  to: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
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
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-medium  transition-colors hover:scale-102 active:opacity-50 shadow-md";

  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-foreground border border-border",
    outline: "bg-background text-foreground border border-border",
    ghost: "bg-transparent text-foreground",
  };

  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
};
