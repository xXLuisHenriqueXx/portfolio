import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { SECTION_IDS, useActiveSection } from "./hooks/useActiveSection";

function App() {
  const activeScreen = useActiveSection(SECTION_IDS);

  return (
    <main className={"flex flex-col min-w-full overflow-x-hidden"}>
      <Navbar activeScreen={activeScreen} />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
