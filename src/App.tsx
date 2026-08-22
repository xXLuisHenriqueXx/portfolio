import { lazy, Suspense, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

export type TActiveScreen =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "contact";

function App() {
  const [activeScreen, setActiveScreen] = useState<TActiveScreen>("home");

  return (
    <main className={"flex flex-col min-w-full overflow-x-hidden"}>
      <Navbar activeScreen={activeScreen} />
      <Home setActiveScreen={setActiveScreen} />

      <Suspense fallback={null}>
        <About setActiveScreen={setActiveScreen} />
        <Skills setActiveScreen={setActiveScreen} />
        <Projects setActiveScreen={setActiveScreen} />
        <Contact setActiveScreen={setActiveScreen} />
      </Suspense>
    </main>
  );
}

export default App;
