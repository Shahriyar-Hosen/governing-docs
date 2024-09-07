import { Hero } from "~/home";
import { Footer, Navbar } from "~/shared";

function App() {
  return (
    <main className="font-nunito-sans">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}

export default App;
