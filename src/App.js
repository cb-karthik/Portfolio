import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
     <Navbar/>
     <Home />
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>
     <SocialLinks/>
    </div>
  );
}

export default App;
