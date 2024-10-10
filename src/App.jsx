import "./App.css";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/Footer/FooterBottom";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}
