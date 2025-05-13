import React, { useEffect, useState } from "react";
import LandingPage from './components/LandingPage'
import './App.css'
import './components/shooting-stars.css'
import Loader from "./components/Loader"; // path to your loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for the whole window to load (including images)
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1000); // simulate 1s fade-out
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
      {loading ? <Loader /> : <LandingPage/>}
    </div>
  )
}

export default App

