import { cn } from "@/lib/utils";
import { FC } from "react";

export const Container: FC<IClassChildren> = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-screen-1440 mx-auto", className)}>
      {children}
    </div>
  );
};
