import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/navbarComponents";
import Footer from "./components/footerComponent";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Hero from "./components/hero";
import About from "./components/about";
import Acadamics from "./components/acadamics";
import Project from "./components/projects";
import Contact from "./components/contact";
import Tools from "./components/tools";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <div className="content">
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
        </div>
        <Footer />
      </BrowserRouter>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        theme="colored"
        toastStyle={{
          borderRadius: "12px",
          padding: "12px 16px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          maxWidth: "300px",
          margin: "0 auto",
        }}
        className="responsive-toast-container"
      />
    </div>
  );
}

export default App;
