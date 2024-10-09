/* eslint-disable react/prop-types */
import { Arrow } from "../icon";

export const FaqCard = ({ a, q, isActive, onClick }) => {
  return (
    <div className="shadow-faq w-full rounded-[20px] px-5 md:px-[30px] py-5 bg-white">
      <button
        onClick={onClick}
        className="w-full inline-flex justify-between items-center gap-5"
      >
        <h1 className="font-bold text-start text-lg lg:text-[26px] lg:leading-[36.4px] text-accent">
          {q}
        </h1>

        <div className="text-primary">
          <Arrow className={isActive ? "-rotate-90" : "rotate-90"} />
        </div>
      </button>
      {isActive && (
        <p className="tracking-[2%] text-sm sm:text-base text-accent max-w-[807px] pt-5">
          {a}
        </p>
      )}
    </div>
  );
};
