import React, { useState } from "react";

const HRMSLogin = () => {
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userType || !username.trim() || !password.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        alert(`Login successful!\nUser Type: ${userType}\nEmail: ${data.user.email}`);
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);
        localStorage.setItem("email", data.user.email);

        // Redirect based on role (optional)
        if (data.user.role === "admin") {
          window.location.href = "/admin/dashboard";
        } else if (data.user.role === "hr") {
          window.location.href = "/hr/dashboard";
        } else {
          window.location.href = "/employee/dashboard";
        }
      } else {
        // Login failed
        alert(data.detail || "Login failed. Check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      backgroundColor: "#f4f7fa",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "40px",
      width: "360px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
      borderRadius: "12px",
    },
    heading: {
      textAlign: "center",
      marginBottom: "24px",
      color: "#2c3e50",
      fontWeight: 600,
    },
    label: {
      display: "block",
      marginBottom: "8px",
      color: "#34495e",
      fontSize: "14px",
      fontWeight: 500,
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "20px",
      border: "1px solid #dcdde1",
      borderRadius: "6px",
      fontSize: "14px",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#3498db",
      color: "#ffffff",
      fontSize: "16px",
      fontWeight: 600,
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>HRMS Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userType" style={styles.label}>
            User Type
          </label>
          <select
            id="userType"
            style={styles.input}
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="">-- Select User Type --</option>
            <option value="admin">Admin</option>
            <option value="hr">HR</option>
            <option value="employee">Employee</option>
          </select>

          <label htmlFor="username" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="username"
            placeholder="Enter email"
            style={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HRMSLogin;
