import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

import AlertBox from "../components/Alert/Alert"; // ✅ Your reusable Alert
import Loader from "../components/Loader/Loader";  // ✅ Your reusable Loader

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulated login
    setTimeout(() => {
      if (form.email === "admin@example.com" && form.password === "password123") {
        setAlertData({
          open: true,
          message: "Login successful!",
          type: "success",
        });
      } else {
        setAlertData({
          open: true,
          message: "Invalid email or password.",
          type: "error",
        });
      }
      setLoading(false);
    }, 1500);
  };

  const handleCloseAlert = () => {
    setAlertData({ ...alertData, open: false });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: "100%", maxWidth: 400 }}
      >
        <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <img
              src="/assets/images/logo.png"
              alt="HRMS Logo"
              style={{ width: 60, marginBottom: 8 }}
            />
            <Typography variant="h5" fontWeight={600}>
              Welcome to HRMS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Please login to continue
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              margin="normal"
              value={form.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              margin="normal"
              value={form.password}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, py: 1.2, fontWeight: "bold" }}
              disabled={loading}
            >
              {loading ? <Loader size={20} /> : "Login"}
            </Button>
          </form>

          <Typography
            variant="body2"
            sx={{
              mt: 2,
              color: "text.secondary",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </Typography>
        </Paper>
      </motion.div>

      {alertData.open && (
        <AlertBox
          type={alertData.type}
          title={alertData.type === "success" ? "Success" : "Error"}
          message={alertData.message}
          onClose={handleCloseAlert}
        />
      )}
    </Box>
  );
};

export default LoginPage;
