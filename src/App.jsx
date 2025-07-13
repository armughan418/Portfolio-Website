import Navbar from "./components/navbarComponents";
import Footer from "./components/footerComponent";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}
export default App;