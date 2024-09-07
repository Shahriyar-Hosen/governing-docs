import { Hero, ProblemSolution } from "~/home";
import { Footer, Navbar } from "~/shared";

function App() {
  return (
    <main className="font-nunito-sans bg-hero-bg min-h-svh bg-no-repeat bg-top">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Footer />
    </main>
  );
}

export default App;
