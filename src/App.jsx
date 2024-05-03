import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  Home,
  About,
  Contact,
  Services,
  ConceptArt,
  Animations,
  MotionGraphics,
  Techpack,
  CameraMonitoring,
} from "./pages";

// page transition ki animation run krne ke liye hm isko use krrhe hain framer-motion ko
import { AnimatePresence } from "framer-motion";
// import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import VideoSplashScreen from "./components/VideoSplashScreen";

// bg -- bg-gradient-to-tr from-blue-800 via-blue-200 to-blue-800

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 9000); // match this time to your video length

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#1a2541]">
      <Router>
        {showSplash ? (
          <VideoSplashScreen />
        ) : (
          <>
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                {/* <Route path="/faqs" element={<Faqs />} /> */}
                <Route path="/contact" element={<Contact />} />
                {/* Dynamic Route bnarhe hain hm project page mein */}
                {/* <Route path="/:projectName" element={<Portfolio />} /> */}

                {/* Services Pages Routes*/}
                <Route path="/services/concept-art" element={<ConceptArt />} />
                <Route path="/services/animations" element={<Animations />} />
                <Route
                  path="/services/motion-graphics"
                  element={<MotionGraphics />}
                />
                <Route path="/services/techpack" element={<Techpack />} />
                <Route
                  path="/services/camera-monitoring-service"
                  element={<CameraMonitoring />}
                />
              </Routes>
            </AnimatePresence>
            {/* <Footer /> */}
          </>
        )}
      </Router>
    </main>
  );
};

export default App;
