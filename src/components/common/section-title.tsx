import { cn } from "@/lib/utils";
import { FC } from "react";
import { GradientText } from ".";

interface IProps extends IClassChildren {
  gradient: string;
}
export const SectionTitle: FC<IProps> = ({ children, gradient, className }) => (
  <h1
    className={cn(
      "text-[46px] leading-[58.7px] font-bold font-space-grotesk",
      className
    )}
  >
    {children} <GradientText>{gradient}</GradientText>
  </h1>
);