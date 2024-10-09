import { useState } from "react";
import { faqs } from "../../lib/db";
import { SectionTitle } from "../common";
import { FaqCard } from "./FaqCard";

export const Faq = () => {
  const [active, setActive] = useState(1);

  const handleChange = (index) => {
    active === index ? setActive(-1) : setActive(index);
  };

  return (
    <section className="w-full mt-[50px] sm:mt-[80px] lg:mt-[100px] xl:mt-[150px] relative">
      <div className="w-full max-w-[982px] mx-auto px-2.5">
        <SectionTitle gradient="Asked Questions">Frequently </SectionTitle>

        <div className="pt-10 space-y-5 relative z-10">
          {faqs.map((faq, i) => (
            <FaqCard
              key={i}
              isActive={active === i}
              onClick={() => handleChange(i)}
              {...faq}
            />
          ))}
        </div>
      </div>
      <img
        src="/faq-bg-line.svg"
        alt="Faq Bg Line"
        className="absolute z-0 -top-[115px] -left-[540px] 2xl:-left-[23.8%] h-[590px] !w-[1713px]"
      />
    </section>
  );
};
