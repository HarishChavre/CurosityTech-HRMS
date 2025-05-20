import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const Alert = ({ type = "success", title, message, onClose }) => {
  const color = type === "error" ? "#b91c1c" : "#065f46";
  const bgColor = type === "error" ? "#fee2e2" : "#d1fae5";

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        backgroundColor: bgColor,
        color: color,
        padding: "1rem",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center",
        margin: "2rem auto",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>{title}</Typography>
      <Typography variant="body1" sx={{ my: 1 }}>{message}</Typography>
      <Button
        onClick={onClose}
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: color,
          ":hover": { backgroundColor: color },
        }}
      >
        OK
      </Button>
    </motion.div>
  );
};

export default Alert;
