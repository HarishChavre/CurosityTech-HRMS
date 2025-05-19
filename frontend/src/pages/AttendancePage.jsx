import React from "react";

const AttendancePage = () => {
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
      background: "linear-gradient(to bottom right, #ffffff, #f4f9fd)",
      padding: "20px",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    heading: {
      fontSize: "20px",
      fontWeight: "700",
      marginBottom: "12px",
      color: "#2c3e50",
    },
    statBox: {
      textAlign: "center",
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      padding: "20px",
      boxShadow: "0 6px 24px rgba(0,0,0,0.05)",
      transition: "transform 0.3s ease",
      cursor: "pointer",
    },
    statNumber: {
      fontSize: "36px",
      fontWeight: "700",
      color: "#3498db",
    },
    chart: {
      width: "100%",
      height: "200px",
      backgroundColor: "#ecf0f1",
      borderRadius: "12px",
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
      backgroundColor: "#e67e22",
      border: "none",
      color: "#fff",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "10px",
      fontWeight: "600",
      transition: "background-color 0.3s ease, transform 0.3s ease",
    },
  };
  return (
    <>
      <h1>This is attendence Page </h1>

      <div style={styles.container}>
        <div style={styles.grid2}>
          <h3 style={styles.heading}>Hello Scarlette!</h3>
          <p>You have 45 new applications. It's a lot of work for today!</p>
          Review it
        </div>

        <div style={styles.grid2}>
          <h3 style={styles.heading}>Team Performance</h3>

          <h3 style={styles.heading}>Total Employee</h3>
          <ul>
            <li>Software Engineer: 50</li>
            <li>UI/UX Designer: 28</li>
            <li>Data Analyst: 25</li>
            <li>Mobile Dev: 20</li>
            <li>Project Manager: 7</li>
          </ul>
        </div>

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

        <div style={styles.grid3}>
          <h3 style={styles.heading}>Events and Meetings</h3>
          <ul>
            <li>Marketing Meeting - 8:00 AM</li>
            <li>Development Meeting - 10:00 AM</li>
            <li>Safety - 11:30 AM</li>
            <li>Meeting with Designer - 1:00 PM</li>
          </ul>

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
    </>
  );
};

export default AttendancePage;
