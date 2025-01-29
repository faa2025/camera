import YouTubeEmbed from "./YoutubeEmbed";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Button from "@mui/material/Button";

function App() {
  const videoId = "RBZgpIW08Fk";
  return (
    <Router>
      <div className="App">
        <nav
          className="navbar"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link to="/">Home Page</Link>

          <p>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary">
                Log in
              </Button>
            </Link>
          </p>
        </nav>
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
