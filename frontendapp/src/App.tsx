import YouTubeEmbed from "./YoutubeEmbed";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
function App() {
  const videoId = "RBZgpIW08Fk";
  return (
    <Router>
      <div className="App">
        <Navbar />
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
          <Route path="/login" element={<h1>Log In Page</h1>} />
          <Route path="/signup" element={<h1>Sign Up Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
