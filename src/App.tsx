import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <main className="flex flex-col min-w-full font-inter">
      <Navbar />

      <Home />

      <About />
    </main>
  );
}

export default App;
