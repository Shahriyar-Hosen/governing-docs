import { Button, Container } from "../common";

export const Note = () => {
  return (
    <section className="pt-[150px]">
      <Container className="bg-gradient-primary rounded-[20px] py-14 pl-10 pr-16 flex justify-between items-center gap-2.5">
        <div className="space-y-[30px]">
          <h1 className="font-bold text-[46px] leading-[64.4px] text-white  max-w-[566px]">
            Ready to Simplify Your Document Management?
          </h1>
          <p className="text-white font-bold max-w-[500px]">
            Sign up today and experience the power of AI-driven legal
            documentation.
          </p>
        </div>
        <Button className="bg-white text-secondary">Get Started Now</Button>
      </Container>
    </section>
  );
};
