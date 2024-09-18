import {
  Faq,
  Hero,
  Note,
  Partners,
  ProblemSolution,
  Reviews,
} from "./components/home";
import { Footer, Navbar } from "./components/shared";

const App = () => {
  return (
    <main className="font-nunito-sans bg-hero-bg min-h-svh bg-no-repeat bg-top ">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Reviews />
      <Partners />
      <Faq />
      <Note />
      <Footer />
    </main>
  );
};

export default App;
