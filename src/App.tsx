import { Hero, ProblemSolution, Reviews } from "~/home";
import { Footer, Navbar } from "~/shared";

const App = () => {
  return (
    <main className="font-nunito-sans bg-hero-bg min-h-svh bg-no-repeat bg-top">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Reviews />
      <Footer />
    </main>
  );
};

export default App;
