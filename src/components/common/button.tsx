import { cn } from "@/lib/utils";
import { FC } from "react";

export const Button: FC<IClassChildren> = ({ children, className }) => {
  return (
    <button
      className={cn(
        "font-bold py-4 px-[25px] bg-gradient-primary opacity-90 transition-all delay-150 hover:opacity-100 text-white rounded-full text-sm md:text-base",
        className
      )}
    >
      {children}
    </button>
  );
};
