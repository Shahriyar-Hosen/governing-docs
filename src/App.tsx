import { GradientText } from "~/common";

function App() {
  return (
    <main className="flex justify-center items-center min-h-svh w-full flex-col gap-2.5">
      <h1 className="text-3xl font-bold underline text-primary">Primary</h1>
      <h1 className="text-3xl font-bold underline text-secondary">Secondary</h1>
      <h1 className="text-3xl font-bold underline text-accent">Accent</h1>
      <GradientText className="text-3xl font-bold">Hello world!</GradientText>
    </main>
  );
}

export default App;
