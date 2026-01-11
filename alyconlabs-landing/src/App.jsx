import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AlcyonLabsHomePage from "./AlcyonLabsHomePage";
import CaseStudy from "./CaseStudy";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <AlcyonLabsHomePage isDark={isDark} setIsDark={setIsDark} />
            }
          />
          <Route
            path="/projects/:slug"
            element={<CaseStudy isDark={isDark} setIsDark={setIsDark} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
