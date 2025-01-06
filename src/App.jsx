import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import PdfGenerator from "./components/Pdf Generator/PdfGenerator";
import coverLogo from "./components/images/Cover Page logo.png";
import { RiInformation2Line } from "react-icons/ri";
import About from "./components/about/About";

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleAboutToggle = () => {
    setIsAboutOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 bg-gray-800 shadow-lg  p-5">
        <div className="flex items-center w-full max-w-4xl lg:px-4">
          <img src={coverLogo} alt="Logo" className="w-14" />
          <h1 className="lg:text-2xl font-bold text-indigo-400">
            Cover Page Generator
          </h1>
        </div>
        <div className="pr-5">
          <button
            className="border p-1 rounded hover:bg-indigo-500 transition"
            onClick={handleAboutToggle}
          >
            <RiInformation2Line className="text-3xl text-white" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <PdfGenerator />
      <Footer />

      {/* About Popup */}
      {isAboutOpen && <About onClose={handleAboutToggle} />}
    </div>
  );
}

export default App;
