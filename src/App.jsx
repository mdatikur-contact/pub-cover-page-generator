import "./App.css";
import Footer from "./components/footer/Footer";
import PdfGenerator from "./components/Pdf Generator/PdfGenerator";
import coverLogo from "./components/images/Cover Page logo.png";

function App() {
  return (
    <div>
      <div className="flex items-center  mb-6 bg-indigo-400 p-5 ">
        <div className="flex items-center  w-full max-w-4xl lg:px-4">
          <img src={coverLogo} alt="" className="w-14" />
          <h1 className="lg:text-2xl font-bold text-white">Cover Page Generator</h1>
        </div>
      </div>

      <PdfGenerator></PdfGenerator>
      <Footer></Footer>
    </div>
  );
}

export default App;
