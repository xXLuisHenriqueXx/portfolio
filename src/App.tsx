import LogoLoop from "./components/ui/LogoLoop";
import GradualBlur from "./components/ui/GradualBlur";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { SECTION_IDS, useActiveSection } from "./hooks/useActiveSection";
import { LOOP_LOGOS } from "./static/data/LogoLoop.data";

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

      <About />
      <Skills />
      <Projects />
      <Contact />

      <GradualBlur target="page" position="bottom" height="4rem" />
    </main>
  );
}

export default App;
