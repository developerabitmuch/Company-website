import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Contact, Services, Work, Faqs } from "./pages";

// page transition ki animation run krne ke liye hm isko use krrhe hain framer-motion ko
import { AnimatePresence } from "framer-motion";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-gradient-to-tr from-blue-800 via-blue-200 to-blue-800 ">
      <Router>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
