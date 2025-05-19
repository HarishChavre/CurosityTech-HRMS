import React from "react";

const HomePage = () => {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "20px",
      padding: "20px",
      backgroundColor: "#f0f4f8",
      fontFamily: "Segoe UI, sans-serif",
      color: "#333",
    },
    grid2: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
    },
    card: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease",
    },
    cardHover: {
      transform: "scale(1.02)",
    },
    heading: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "12px",
      color: "#2c3e50",
    },
    statBox: {
      textAlign: "center",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
    },
    statNumber: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#1abc9c",
    },
    chart: {
      width: "100%",
      height: "200px",
      backgroundColor: "#ecf0f1",
      borderRadius: "10px",
    },
    employeeTable: {
      width: "100%",
      borderCollapse: "collapse",
      borderRadius: "10px",
      overflow: "hidden",
    },
    th: {
      textAlign: "left",
      padding: "12px",
      backgroundColor: "#dfe6e9",
      fontWeight: "bold",
      color: "#2d3436",
    },
    td: {
      padding: "12px",
      borderBottom: "1px solid #ecf0f1",
    },
    avatar: {
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      marginRight: "10px",
      verticalAlign: "middle",
    },
    button: {
      padding: "10px 16px",
      backgroundColor: "#1abc9c",
      border: "none",
      color: "#fff",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "10px",
      fontWeight: "600",
    },
  };

  return (
    <>
      <h1>Welcome to Dashboard</h1>

      <div style={styles.container}>
        <div style={styles.grid2}>
          <div style={styles.card}>
            <h3 style={styles.heading}>Hello Scarlette!</h3>
            <p>You have 45 new applications. It's a lot of work for today!</p>
            <button style={styles.button}>Review it</button>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statNumber}>99</div>
            <p>Total Present</p>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statNumber}>15</div>
            <p>Total Absent</p>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statNumber}>06</div>
            <p>Total On Leave</p>
          </div>
        </div>

        <div style={styles.grid2}>
          <div style={styles.card}>
            <h3 style={styles.heading}>Team Performance</h3>
            <div style={styles.chart}>[Chart Placeholder]</div>
          </div>
          <div style={styles.card}>
            <h3 style={styles.heading}>Total Employee</h3>
            <ul>
              <li>Software Engineer: 50</li>
              <li>UI/UX Designer: 28</li>
              <li>Data Analyst: 25</li>
              <li>Mobile Dev: 20</li>
              <li>Project Manager: 7</li>
            </ul>
          </div>
        </div>

        <div style={styles.card}>
          <h3 style={styles.heading}>Employee Status</h3>
          <table style={styles.employeeTable}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Job role</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>TL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>2563</td>
                <td style={styles.td}>John Smith</td>
                <td style={styles.td}>UI/UX Designer</td>
                <td style={styles.td}>Active</td>
                <td style={styles.td}>Swidden V.</td>
              </tr>
              <tr>
                <td style={styles.td}>2567</td>
                <td style={styles.td}>Anika Dorwart</td>
                <td style={styles.td}>React Developer</td>
                <td style={styles.td}>Active</td>
                <td style={styles.td}>Kadin C.</td>
              </tr>
              <tr>
                <td style={styles.td}>2569</td>
                <td style={styles.td}>Alfredo Saris</td>
                <td style={styles.td}>Graphic Designer</td>
                <td style={styles.td}>Inactive</td>
                <td style={styles.td}>Kaiya F.</td>
              </tr>
              <tr>
                <td style={styles.td}>2572</td>
                <td style={styles.td}>Jakob Gouse</td>
                <td style={styles.td}>Software Developer</td>
                <td style={styles.td}>Active</td>
                <td style={styles.td}>Talan T.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={styles.grid3}>
          <div style={styles.card}>
            <h3 style={styles.heading}>Events and Meetings</h3>
            <ul>
              <li>Marketing Meeting - 8:00 AM</li>
              <li>Development Meeting - 10:00 AM</li>
              <li>Safety - 11:30 AM</li>
              <li>Meeting with Designer - 1:00 PM</li>
            </ul>
          </div>
          <div style={styles.card}>
            <h3 style={styles.heading}>Birthdays</h3>
            <ul>
              <li>
                <img
                  style={styles.avatar}
                  src="https://via.placeholder.com/30"
                  alt="avatar"
                />{" "}
                Madelyn Philips - 12/08/2024
              </li>
              <li>
                <img
                  style={styles.avatar}
                  src="https://via.placeholder.com/30"
                  alt="avatar"
                />{" "}
                Ann Stanton - 20/08/2024
              </li>
              <li>
                <img
                  style={styles.avatar}
                  src="https://via.placeholder.com/30"
                  alt="avatar"
                />{" "}
                Terry Saris - 25/08/2024
              </li>
              <li>
                <img
                  style={styles.avatar}
                  src="https://via.placeholder.com/30"
                  alt="avatar"
                />{" "}
                Jordyn Curtis - 28/08/2024
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
