import { Hero } from "~/home";
import { Footer, Navbar } from "~/shared";

function App() {
  return (
    <main className="font-nunito-sans bg-hero-bg min-h-svh bg-cover">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}

export default App;
