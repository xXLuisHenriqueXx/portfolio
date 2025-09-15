import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="flex flex-col min-w-full font-inter">
      <Navbar />

      <Home />
    </main>
  );
}

export default App;
