import React, { useState } from "react";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";

const AttendancePage = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setProfileImage(reader.result); // Save the uploaded image as a data URL
      };
    }
  };

  // Clear or remove the profile picture
  const handleRemoveImage = () => {
    setProfileImage(null);
  };

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
    profileImage: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "10px",
    },
    uploadButton: {
      padding: "10px 16px",
      backgroundColor: "#3498db",
      border: "none",
      color: "#fff",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "10px",
      fontWeight: "600",
      transition: "background-color 0.3s ease, transform 0.3s ease",
    },
    removeButton: {
      padding: "8px 12px",
      backgroundColor: "#e74c3c",
      border: "none",
      color: "#fff",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "10px",
      fontWeight: "600",
      transition: "background-color 0.3s ease, transform 0.3s ease",
    },
    input: {
      display: "none", // Hide the default file input
    },
    label: {
      cursor: "pointer", // Add pointer cursor for the label
      padding: "10px 16px",
      backgroundColor: "#2ecc71",
      borderRadius: "8px",
      color: "#fff",
      marginTop: "10px",
      display: "inline-block",
      fontWeight: "600",
    },
  };

  return (
    <>
      <h1>This is Attendance Page</h1>

      <div style={styles.container}>
        <div style={styles.avatarContainer}>
          <h3>Upload Profile Picture</h3>

          {/* Display Profile Image */}
          {profileImage ? (
            <>
              <img
                src={profileImage}
                alt="Profile"
                style={styles.profileImage}
              />
              <br />
              <button style={styles.removeButton} onClick={handleRemoveImage}>
                Remove Picture
              </button>
            </>
          ) : (
            <p>No profile image uploaded.</p>
          )}

          {/* File Input for Profile Image */}
          <input
            type="file"
            id="fileInput"
            style={styles.input}
            accept="image/*"
            onChange={handleImageChange}
          />
          <label htmlFor="fileInput" style={styles.label}>
            Upload Picture
          </label>
        </div>

        <div style={styles.grid2}>
          <h3>Hello Scarlette!</h3>
          <p>You have 45 new applications. It's a lot of work for today!</p>
          Review it
        </div>

        <div style={styles.grid2}>
          <h3>Team Performance</h3>
          <h3>Total Employee</h3>
          <ul>
            <li>Software Engineer: 50</li>
            <li>UI/UX Designer: 28</li>
            <li>Data Analyst: 25</li>
            <li>Mobile Dev: 20</li>
            <li>Project Manager: 7</li>
          </ul>
        </div>

        <h3>Employee Status</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Job role</th>
              <th>Status</th>
              <th>TL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2563</td>
              <td>John Smith</td>
              <td>UI/UX Designer</td>
              <td>Active</td>
              <td>Swidden V.</td>
            </tr>
            <tr>
              <td>2567</td>
              <td>Anika Dorwart</td>
              <td>React Developer</td>
              <td>Active</td>
              <td>Kadin C.</td>
            </tr>
            <tr>
              <td>2569</td>
              <td>Alfredo Saris</td>
              <td>Graphic Designer</td>
              <td>Inactive</td>
              <td>Kaiya F.</td>
            </tr>
            <tr>
              <td>2572</td>
              <td>Jakob Gouse</td>
              <td>Software Developer</td>
              <td>Active</td>
              <td>Talan T.</td>
            </tr>
          </tbody>
        </table>

        <div style={styles.grid3}>
          <h3>Events and Meetings</h3>
          <ul>
            <li>Marketing Meeting - 8:00 AM</li>
            <li>Development Meeting - 10:00 AM</li>
            <li>Safety - 11:30 AM</li>
            <li>Meeting with Designer - 1:00 PM</li>
          </ul>

          <h3>Birthdays</h3>
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
        </div>
      </div>
    </>
  );
};

export default AttendancePage;
