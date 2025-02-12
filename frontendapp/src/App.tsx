import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import Product from "./components/pages/Product";
import Login from "./components/pages/Login";
import Homepage from "./components/pages/Homepage";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./components/pages/Dashboard.tsx";
import Signup from "./components/pages/Signup.tsx";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/camera" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Product />} />
          <Route path="/camera/login" element={<Login />} />
          <Route path="/Sign-up" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
