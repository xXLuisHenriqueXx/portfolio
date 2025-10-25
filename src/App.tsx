import { useState } from "react";
import { tv } from "tailwind-variants";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const appStyles = tv({
  slots: {
    container: "flex flex-col min-w-full overflow-x-hidden",
  },
});

const { container } = appStyles();

export type TActiveScreen =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "contact";

function App() {
  const [activeScreen, setActiveScreen] = useState<TActiveScreen>("home");

  return (
    <main className={container()}>
      <Navbar activeScreen={activeScreen} />

      <Home setActiveScreen={setActiveScreen} />

      <About setActiveScreen={setActiveScreen} />

      <Skills setActiveScreen={setActiveScreen} />

      <Projects setActiveScreen={setActiveScreen} />

      <Contact setActiveScreen={setActiveScreen} />
    </main>
  );
}

export default App;
