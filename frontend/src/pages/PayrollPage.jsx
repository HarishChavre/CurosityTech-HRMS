import React from "react";

const PayrollPage = () => {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "20px",
      padding: "20px",
      background: "linear-gradient(to right, #f8fbfd, #e9f2f9)",
      fontFamily: "Segoe UI, sans-serif",
      color: "#333",
    },
    headerRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#2d3436",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
    },
    actionButton: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "10px",
      fontWeight: "600",
      cursor: "pointer",
      backgroundColor: "#00b894",
      color: "#fff",
      transition: "all 0.3s ease",
    },
    actionButtonHover: {
      backgroundColor: "#019875",
    },
    gridCards: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
      marginTop: "20px",
    },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "16px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    statNumber: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#0984e3",
    },
    filterRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "20px",
    },
    filterSelect: {
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #dcdde1",
    },
    chartSection: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      marginTop: "20px",
    },
    chartCard: {
      background: "#fff",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    },
    chart: {
      width: "100%",
      height: "200px",
      backgroundColor: "#ecf0f1",
      borderRadius: "12px",
    },
  };
  return (
    <>
      <h1>This is Payrool Page </h1>

      <div style={styles.container}>
        <div style={styles.headerRow}>
          <div style={styles.title}>Payrolls</div>
          <div style={styles.buttonGroup}>
            <button style={styles.actionButton}>Export Payroll</button>
            <button style={styles.actionButton}>Create Payroll</button>
          </div>
        </div>

        <div style={styles.gridCards}>
          <div style={styles.statNumber}>$52.500</div>
          <p>Payroll Cost</p>

          <div style={styles.statNumber}>$22.500</div>
          <p>Total Expense</p>

          <div style={styles.statNumber}>$02.500</div>
          <p>Pending Payments</p>

          <div style={styles.statNumber}>120</div>
          <p>Total Payrolls</p>
        </div>

        <div style={styles.filterRow}>
          <input style={styles.filterSelect} placeholder="10/03/2025" />
          <select style={styles.filterSelect}>
            <option>Select Salary Type</option>
          </select>
          <select style={styles.filterSelect}>
            <option>Select Clients</option>
          </select>
          <select style={styles.filterSelect}>
            <option>Select User</option>
          </select>
          <button style={styles.actionButton}>Send To Finance Team</button>
        </div>

        <div style={styles.chartSection}>
          <div style={styles.chartCard}>
            <h3>Payment History</h3>
            <div style={styles.chart}>[Chart Placeholder]</div>
          </div>
          <div style={styles.chartCard}>
            <h3>Employee Type</h3>
            <div style={styles.chart}>[Donut Chart Placeholder]</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayrollPage;
