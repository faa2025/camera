import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import Product from "./components/pages/Product";
import Login from "./components/pages/Login";
import Homepage from "./components/pages/Homepage";
import ProtectedRoute from "./components/Authentication/ProtectedRoute";
import Dashboard from "./components/pages/Dashboard.tsx";
import Signup from "./components/pages/Signup.tsx";
import { AuthProvider } from "./components/Authentication/AuthContext";

function App() {
  return (
     <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/camera" element={<Homepage />} />
            <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
            <Route path="/products" element={<ProtectedRoute><Product /></ProtectedRoute>} />
            <Route path="/camera/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
