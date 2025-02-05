import YouTubeEmbed from "./YoutubeEmbed";
import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
>>>>>>> 40fe31b228a6a635f7defdd858748c0cb81d7f7b
import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import Product from "./components/pages/Product";
import Signup from "./components/pages/Signup";
import Homepage from "./components/pages/Homepage";
function App() {
  const videoId = "RBZgpIW08Fk";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Product />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route
            path="/Services"
            element={
              <>
                <YouTubeEmbed videoId={videoId} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;