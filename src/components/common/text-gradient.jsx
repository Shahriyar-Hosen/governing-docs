import { cn } from "../../lib/utils";

export const GradientText = ({ children, className }) => (
  <span
    className={cn(
      "bg-gradient-to-b from-[#00D2FF] to-[#059DBE] bg-clip-text text-transparent",
      className
    )}
  >
    {children}
  </span>
);
