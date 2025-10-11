import Navbar from "./components/navbarComponents";
import Footer from "./components/footerComponent";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Hero from "./components/hero";
import About from "./components/about";
import Acadamics from "./components/acadamics";
import Project from "./components/projects";
import Contact from "./components/contact";
import Tools from "./components/tools";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/acadamics" element={<Acadamics />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tools-and-technologies" element={<Tools />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
export default App;
