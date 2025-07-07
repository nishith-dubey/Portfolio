import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from './components/LandingPage';
// import Database from './components/Database';      // New route component
import Loader from "./components/Loader";
import Learn from "./Pages/Learn/Learn";

import './App.css';
import './components/shooting-stars.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/learn" element={<Learn />} />
            {/* <Route path="/database" element={<Database />} /> */}
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
