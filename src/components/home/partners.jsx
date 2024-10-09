import { partners } from "../../lib/db";
import { Container, SectionTitle } from "../common";

export const Partners = () => {
  return (
    <section className="px-2.5">
      <Container className="max-w-[1276px] px-3 py-[50px] bg-[#E6F9FD] rounded-[20px]">
        <SectionTitle gradient="Partners">Our</SectionTitle>

        <div className="flex flex-wrap justify-center items-center gap-x-[30px] gap-y-7 pt-10">
          {partners.map(({ src, alt }) => (
            <div
              key={src}
              className="w-[274px] bg-white rounded-xl h-[101px] flex justify-center items-center border border-[#D6D6D6]"
            >
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
