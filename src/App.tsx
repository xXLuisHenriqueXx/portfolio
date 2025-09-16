import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="flex flex-col min-w-full">
      <Navbar />

      <Home />

      <About />

      <Skills />
    </main>
  );
}

export default App;
