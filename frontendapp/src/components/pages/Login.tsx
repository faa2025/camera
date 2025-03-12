import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";
import "./Login.css";
import GoogleAuth from "../Authentication/GoogleLogin";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { googleLogin } = useAuth();

 const handleGoogleLogin = (username: string) => {
    googleLogin(username);
    navigate("/dashboard"); // Redirect after Google login
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <div className="google-login">
        <h3>Or login with Google</h3>
        <GoogleAuth onSuccess={handleGoogleLogin} onError={setError} />
        <p className="signup-link">
        Don't have an account? <a href="/sign-up">Sign up</a>
      </p>
      </div>
    </div>
  );
};

export default Login;
