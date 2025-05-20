import React from "react";
import { CircularProgress } from "@mui/material";

const Loader = ({ fullScreen = false, size = 40 }) => {
  const spinner = (
    <CircularProgress
      size={size}
      sx={{ color: "#1976d2" }}
      thickness={4}
    />
  );

  if (fullScreen) {
    return (
      <div style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(255, 255, 255, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
      }}>
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default Loader;
