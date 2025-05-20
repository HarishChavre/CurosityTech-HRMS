import React from "react";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";

const LeavePage = () => {
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
    },
  };

  const employees = [
    {
      id: "2563",
      name: "John Smith",
      role: "UI/UX Designer",
      status: "Active",
      tl: "Swidden V.",
    },
    {
      id: "2567",
      name: "Anika Dorwart",
      role: "React Developer",
      status: "Active",
      tl: "Kadin C.",
    },
    {
      id: "2569",
      name: "Alfredo Saris",
      role: "Graphic Designer",
      status: "Inactive",
      tl: "Kaiya F.",
    },
    {
      id: "2572",
      name: "Jakob Gouse",
      role: "Software Developer",
      status: "Active",
      tl: "Talan T.",
    },
  ];

  const Card = ({ children }) => <div style={styles.card}>{children}</div>;

  const Stat = ({ number, label }) => (
    <div style={styles.statBox}>
      <div style={styles.statNumber}>{number}</div>
      <p>{label}</p>
    </div>
  );
  return (
    <>
      <h1>This is Leave page </h1>

      <div style={styles.container}>
        <div style={styles.grid2}>
          <Card>
            <h3 style={styles.heading}>Hello Scarlette!</h3>
            <p>You have 45 new applications. It's a lot of work for today!</p>
            <button style={styles.button}>Review it</button>
          </Card>
          <Stat number="99" label="Total Present" />
          <Stat number="15" label="Total Absent" />
          <Stat number="06" label="Total On Leave" />
        </div>

        <div style={styles.grid2}>
          <Card>
            <h3 style={styles.heading}>Team Performance</h3>
            <div style={styles.chart}>[Chart Placeholder]</div>
          </Card>
          <Card>
            <h3 style={styles.heading}>Total Employee</h3>
            <ul>
              <li>Software Engineer: 50</li>
              <li>UI/UX Designer: 28</li>
              <li>Data Analyst: 25</li>
              <li>Mobile Dev: 20</li>
              <li>Project Manager: 7</li>
            </ul>
          </Card>
        </div>

        <Card>
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
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td style={styles.td}>{emp.id}</td>
                  <td style={styles.td}>{emp.name}</td>
                  <td style={styles.td}>{emp.role}</td>
                  <td style={styles.td}>{emp.status}</td>
                  <td style={styles.td}>{emp.tl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <div style={styles.grid3}>
          <Card>
            <h3 style={styles.heading}>Events and Meetings</h3>
            <ul>
              <li>Marketing Meeting - 8:00 AM</li>
              <li>Development Meeting - 10:00 AM</li>
              <li>Safety - 11:30 AM</li>
              <li>Meeting with Designer - 1:00 PM</li>
            </ul>
          </Card>
          <Card>
            <h3 style={styles.heading}>Birthdays</h3>
            <ul>
              <li>
                <img src={img1} alt="avatar" /> Madelyn Philips - 12/08/2024
              </li>
              <li>
                <img src={img2} alt="avatar" /> Ann Stanton - 20/08/2024
              </li>
              <li>
                <img src={img3} alt="avatar" /> Terry Saris - 25/08/2024
              </li>
              <li>
                <img src={img4} alt="avatar" /> Jordyn Curtis - 28/08/2024
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LeavePage;
