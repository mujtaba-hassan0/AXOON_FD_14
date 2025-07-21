import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;

