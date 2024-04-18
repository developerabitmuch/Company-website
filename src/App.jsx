import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact, Services } from "./pages";

// page transition ki animation run krne ke liye hm isko use krrhe hain framer-motion ko
import { AnimatePresence } from "framer-motion";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <main className="bg-gradient-to-tr from-blue-800 via-blue-200 to-blue-800 h-full">
      <Router>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </main>
  );
};

export default App;
