import React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import * as jwtDecode from "jwt-decode";  
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = "939939014296-8d490ohf8bgo1d8svqddqrgdj4alqt1m.apps.googleusercontent.com"; // google O-auth Client ID

const GoogleAuth: React.FC = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSuccess = (response: CredentialResponse) => {
    if (response.credential) {
      const decodedToken: any = jwtDecode.jwtDecode(response.credential);
      const username = decodedToken.email;
      googleLogin(username);
      navigate("/dashboard"); // Redirect after Google login
    } else {
      console.log("No credential found in response");
    }
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;