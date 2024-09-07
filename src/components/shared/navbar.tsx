import { Button, Container } from "~/common";

export const Navbar = () => {
  return (
    <nav className="py-11">
      <Container className="px-[26px]">
        <div className="flex justify-between items-center gap-2.5 px-[30px] py-5 bg-white rounded-full">
          <h1 className="font-space-grotesk text-4xl font-bold">
            GoverningDocs
          </h1>

          <div className="flex justify-center items-center gap-4">
            {nevItems.map(({ href, label }, i) => (
              <a href={href} key={i}>
                <p className="text-accent text-base">{label}</p>
              </a>
            ))}
          </div>

          <Button>Get Started Today</Button>
        </div>
      </Container>
    </nav>
  );
};

const nevItems = [
  {
    label: "Problem & Solution",
    href: "/",
  },
  {
    label: "Industries We Serve",
    href: "/",
  },
  {
    label: "How It Works",
    href: "/",
  },
  {
    label: "Testimonials",
    href: "/",
  },
  {
    label: "FAQs",
    href: "/",
  },
];
