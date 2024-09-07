import { Button, Container } from "~/common";

export const Hero = () => {
  return (
    <section className="pt-28">
      <Container className="flex justify-end items-center">
        <div className="space-y-[29px]">
          <h1 className="font-space-grotesk font-bold text-6xl leading-[76.56px] text-secondary capitalize max-w-[593px]">
            Simplify your real estate document analysis
          </h1>
          <p className="font-semibold text-xl  max-w-[519px]">
            Streamline, Automate, and Secure Your Business Documents with Ai
            GoverningDocs
          </p>

          <Button>Get Started Today</Button>
        </div>
        <div>
          <img src="/hero-side.svg" alt="GoverningDocs Home Hero Image" />
        </div>
      </Container>
    </section>
  );
};
