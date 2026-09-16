import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "destructive";
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
}: ButtonProps) => {
  const getVariantClass = () => {
    if (variant === "primary") {
      return "bg-primary text-background hover:bg-primary/90";
    } else if (variant === "secondary") {
      return "border-primary text-primary hover:opacity-70 hover:text-foreground border";
    } else if (variant === "destructive") {
      return "border-destructive text-destructive bg-red-50 hover:bg-red-100 border";
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex w-full items-center justify-center rounded-xl px-6 py-3 font-medium capitalize transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${getVariantClass()}`}>
      {children}
    </button>
  );
};
