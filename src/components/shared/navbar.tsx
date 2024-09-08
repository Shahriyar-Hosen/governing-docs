import { nevItems } from "@/lib/db";
import { Button, Container } from "~/common";

export const Navbar = () => {
  return (
    <nav className="py-8 xl:py-11">
      <Container className="px-5 xl:px-[26px]">
        <div className="flex justify-between items-center gap-2.5 px-5 xl:px-[30px] py-3 xl:py-5 bg-white rounded-full">
          <h1 className="font-space-grotesk text-2xl lg:text-3xl xl:text-4xl font-bold">
            GoverningDocs
          </h1>

          <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-4">
            {nevItems.map(({ href, label }, i) => (
              <a href={href} key={i}>
                <p className="text-accent text-sm xl:text-base">{label}</p>
              </a>
            ))}
          </div>

          <Button>Get Started Today</Button>
        </div>
      </Container>
    </nav>
  );
};
