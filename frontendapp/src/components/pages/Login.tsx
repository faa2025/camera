import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";
import "./Login.css";
import GoogleAuth from "../Authentication/GoogleLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (login(username, password)) {
      navigate("/dashboard"); // Redirect after login
    } else {
      setError("Invalid username or password");
    }
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className="signup-link">
        Don't have an account? <a href="/sign-up">Sign up</a>
      </p>
      <div className="google-login">
        <h3>Or login with Google</h3>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Login;
