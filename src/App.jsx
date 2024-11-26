import "./App.css";
import ScrollToTop from "react-scroll-to-top";
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
        {/* Scroll To Top Button */}
        <ScrollToTop
          smooth
          color="white"
          width="35px"
          style={{
            backgroundColor: "#16a085",
            width: "35px",
            height: "35px",
          }}
        />
      </div>
    </div>
  );
}
