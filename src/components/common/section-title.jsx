import { cn } from "../../lib/utils";
import { GradientText } from ".";

export const SectionTitle = ({ children, gradient, className }) => (
  <h1
    className={cn(
      "text-2xl md:text-[35px] lg:text-[46px] md:leading-[45px] lg:leading-[58.7px] font-bold font-space-grotesk text-center",
      className
    )}
  >
    {children} <GradientText>{gradient}</GradientText>
  </h1>
);
