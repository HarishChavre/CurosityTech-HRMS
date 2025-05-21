import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";

import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";

const MotionBox = motion(Box);

const AttendancePage = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setProfileImage(reader.result); // <-- This could be uploaded to backend here
      };
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null); 
    // <-- Call backend to remove profile picture if stored remotely
  };

  return (
    <Box p={4} bgcolor="background.default" fontFamily="Segoe UI, sans-serif" color="text.primary">
      <Typography variant="h4" gutterBottom>
        Attendance Page
      </Typography>

      <Stack spacing={4}>

        {/* Profile Picture Upload Section */}
        <Paper sx={{ p: 3, maxWidth: 320 }}>
          <Typography variant="h6" mb={2}>
            Upload Profile Picture
          </Typography>

          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            {profileImage ? (
              <>
                <Avatar
                  src={profileImage}
                  alt="Profile"
                  sx={{ width: 100, height: 100 }}
                  component={motion.img}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleRemoveImage}
                  sx={{ mt: 1 }}
                >
                  Remove Picture
                </Button>
              </>
            ) : (
              <Typography>No profile image uploaded.</Typography>
            )}

            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label htmlFor="fileInput">
              <Button variant="contained" component="span" color="success" sx={{ mt: 1 }}>
                Upload Picture
              </Button>
            </label>
          </Box>
        </Paper>

        {/* Greeting and Applications */}
        <Paper sx={{ p: 3, maxWidth: 320 }}>
          <Typography variant="h6">Hello Scarlette!</Typography>
          <Typography>You have 45 new applications. It's a lot of work for today!</Typography>
          <Button variant="outlined" sx={{ mt: 1 }}>
            Review it
          </Button>
        </Paper>

        {/* Team Performance */}
        <Paper sx={{ p: 3, maxWidth: 320 }}>
          <Typography variant="h6">Team Performance</Typography>
          <Typography variant="subtitle1" mt={1} mb={2}>Total Employees</Typography>
          <List dense>
            <ListItem>Software Engineer: 50</ListItem>
            <ListItem>UI/UX Designer: 28</ListItem>
            <ListItem>Data Analyst: 25</ListItem>
            <ListItem>Mobile Dev: 20</ListItem>
            <ListItem>Project Manager: 7</ListItem>
          </List>
        </Paper>

        {/* Employee Status Table */}
        <Paper sx={{ p: 3, overflowX: "auto" }}>
          <Typography variant="h6" mb={2}>Employee Status</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Job Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>TL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Ideally map over employee data from backend */}
              <TableRow>
                <TableCell>2563</TableCell>
                <TableCell>John Smith</TableCell>
                <TableCell>UI/UX Designer</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Swidden V.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2567</TableCell>
                <TableCell>Anika Dorwart</TableCell>
                <TableCell>React Developer</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Kadin C.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2569</TableCell>
                <TableCell>Alfredo Saris</TableCell>
                <TableCell>Graphic Designer</TableCell>
                <TableCell>Inactive</TableCell>
                <TableCell>Kaiya F.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2572</TableCell>
                <TableCell>Jakob Gouse</TableCell>
                <TableCell>Software Developer</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Talan T.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>

        {/* Events, Meetings, and Birthdays */}
        <Paper sx={{ p: 3, maxWidth: 320 }}>
          <Typography variant="h6">Events and Meetings</Typography>
          <List dense>
            <ListItem>Marketing Meeting - 8:00 AM</ListItem>
            <ListItem>Development Meeting - 10:00 AM</ListItem>
            <ListItem>Safety - 11:30 AM</ListItem>
            <ListItem>Meeting with Designer - 1:00 PM</ListItem>
          </List>

          <Typography variant="h6" mt={3}>Birthdays</Typography>
          <List>
            {/* Map birthdays data ideally fetched from backend */}
            {[{ img: img1, name: "Madelyn Philips", date: "12/08/2024" },
              { img: img2, name: "Ann Stanton", date: "20/08/2024" },
              { img: img3, name: "Terry Saris", date: "25/08/2024" },
              { img: img4, name: "Jordyn Curtis", date: "28/08/2024" }].map(({ img, name, date }) => (
              <ListItem key={name}>
                <ListItemAvatar>
                  <Avatar src={img} alt={name} />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={date} />
              </ListItem>
            ))}
          </List>
        </Paper>

      </Stack>
    </Box>
  );
};

export default AttendancePage;
