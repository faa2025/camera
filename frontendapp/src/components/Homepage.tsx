import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary">
          Log in
        </Button>
      </Link>

      <Link to="/signup" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </Link>
    </>
  );
};

export default Home;
