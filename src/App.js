import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Landing from "./components/Landing";
import Mail from "./components/Mail";
import HeaderTop from "./header/HeaderTop";
import Navbar from "./header/Navbar";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <Navbar />
      <Hero />
      <About />
      <Mail />
      <Footer />
    </div>
  );
}

export default App;
