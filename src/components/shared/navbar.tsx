import { Container } from "~/common";

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

export const Navbar = () => {
  return (
    <nav className="bg-cyan-300/20 py-11">
      <Container>
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

          <button className="font-bold py-4 px-[25px] bg-gradient-primary opacity-90  transition-all delay-150 hover:opacity-100 text-white  rounded-full">
            Get Started Today
          </button>
        </div>
      </Container>
    </nav>
  );
};
