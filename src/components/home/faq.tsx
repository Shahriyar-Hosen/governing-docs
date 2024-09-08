import { FC, useState } from "react";
import { SectionTitle } from "~/common";
import { Arrow } from "~/icon";

interface IFaqCard {
  q: string;
  a: string;
  isActive?: boolean;
  onClick: () => void;
}
const FaqCard: FC<IFaqCard> = ({ a, q, isActive, onClick }) => {
  return (
    <div className="shadow-faq w-full rounded-[20px] px-[30px] py-5">
      <button
        onClick={onClick}
        className="w-full inline-flex justify-between items-center"
      >
        <h1 className="font-bold text-[26px] leading-[36.4px] text-accent">
          {q}
        </h1>

        <div className="text-primary">
          <Arrow className={isActive ? "-rotate-90" : "rotate-90"} />
        </div>
      </button>
      {isActive && (
        <p className="tracking-[2%] text-accent max-w-[807px] pt-5">{a}</p>
      )}
    </div>
  );
};

export const Faq = () => {
  const [active, setActive] = useState(1);

  const handleChange = (index: number) => {
    if (active === index) {
      setActive(-1);
    } else {
      setActive(index);
    }
  };

  return (
    <section className="w-full max-w-[982px] mx-auto mt-[150px]">
      <SectionTitle gradient="Asked Questions">Frequently </SectionTitle>

      <div className="pt-10 space-y-5">
        {faqs.map((faq, i) => (
          <FaqCard
            key={i}
            isActive={active === i}
            onClick={() => handleChange(i)}
            {...faq}
          />
        ))}
      </div>
    </section>
  );
};

const faqs = [
  {
    q: "Is my data secure?",
    a: "We cover a wide range of documents, including contracts, NDAs, compliance reports, and more. ",
  },
  {
    q: "What types of documents can Ai GoverningDocs generate?",
    a: "We cover a wide range of documents, including contracts, NDAs, compliance reports, and more. ",
  },
  {
    q: "Can I customize the documents?",
    a: "We cover a wide range of documents, including contracts, NDAs, compliance reports, and more. ",
  },
];
