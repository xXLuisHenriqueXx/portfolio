import { lazy, Suspense } from "react";
import LogoLoop from "./components/ui/LogoLoop";
import GradualBlur from "./components/ui/GradualBlur";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import { SECTION_IDS, useActiveSection } from "./hooks/useActiveSection";
import { LOOP_LOGOS } from "./static/data/LogoLoop.data";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const activeScreen = useActiveSection(SECTION_IDS);

  return (
    <main className="relative flex flex-col min-w-full min-h-screen overflow-hidden">
      <Navbar activeScreen={activeScreen} />

      <Home />

      <div className="relative h-40 text-primary [&_svg]:size-12 overflow-hidden">
        <LogoLoop
          logos={LOOP_LOGOS}
          direction="left"
          gap={64}
          fadeOut
          fadeOutColor="var(--background)"
        />
      </div>

      <Suspense fallback={null}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>

      <GradualBlur target="page" position="bottom" height="4rem" />
    </main>
  );
}

export default App;
