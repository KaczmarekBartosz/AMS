import "./App.css";
import Header from "./Components/Header";
// import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
