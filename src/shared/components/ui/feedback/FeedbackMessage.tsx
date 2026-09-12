import { CircleAlert, CircleCheck, TriangleAlert } from "lucide-react";

type FeedbackMessageProps = {
  variant: "error" | "warning" | "success";
  title?: string;
  message: string;
};

const feedbackVariants = {
  error: {
    icon: CircleAlert,
    containerClasses: "border-destructive/30 bg-destructive/5",
    iconClasses: "text-destructive",
  },
  warning: {
    icon: TriangleAlert,
    containerClasses: "border-yellow-500/40 bg-accent",
    iconClasses: "text-yellow-700",
  },
  success: {
    icon: CircleCheck,
    containerClasses: "border-green-600/30 bg-success",
    iconClasses: "text-green-700",
  },
};

export const FeedbackMessage = ({ variant, title, message }: FeedbackMessageProps) => {
  const { icon: Icon, containerClasses, iconClasses } = feedbackVariants[variant];

  const ariaRole = variant === "success" ? "status" : "alert";

  return (
    <div
      role={ariaRole}
      className={`flex w-full items-start gap-3 rounded-xl border p-4 shadow-sm ${containerClasses}`}>
      <Icon aria-hidden="true" className={`mt-1 h-6 w-6 ${iconClasses}`} />
      <div>
        <p className="text-foreground text-lg font-medium">{title}</p>
        <p className="mt-1 text-sm">{message}</p>
      </div>
    </div>
  );
};
