import YouTubeEmbed from "./YoutubeEmbed";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import Product from "./components/pages/Product";
import Login from "./components/pages/Login";
import Homepage from "./components/pages/Homepage";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./components/pages/Dashboard.tsx";
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
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
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
