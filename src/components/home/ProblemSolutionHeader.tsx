import React from "react";
import { SectionTitle } from "../common";
import { Arrow } from "../icon";

export const ProblemSolutionHeader = () => (
  <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5">
    <SectionTitle gradient="Solution" className="text-start">
      Problem &
    </SectionTitle>

    <div className="flex justify-center items-center gap-[15px]">
      <button className="bg-white size-10 rounded-full text-primary flex justify-center items-center shadow-arrow-btn">
        <Arrow />
      </button>
      <button className="bg-gradient-primary size-10 rounded-full flex justify-center items-center shadow-custom text-white">
        <Arrow />
      </button>
    </div>
  </div>
);
