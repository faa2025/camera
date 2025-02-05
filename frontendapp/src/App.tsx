import YouTubeEmbed from "./YoutubeEmbed";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import Product from "./components/pages/Product";
import Login from "./components/pages/Login";
function App() {
  const videoId = "RBZgpIW08Fk";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Product />} />
          <Route path="/sign-up" element={<Login />} />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>FAA camera</h1>
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
