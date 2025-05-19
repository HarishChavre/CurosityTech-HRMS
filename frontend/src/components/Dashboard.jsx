// Dashboard.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import HomePage from '../pages/HomePage';
import AttendancePage from '../pages/AttendancePage';
import LeavePage from '../pages/LeavePage'
import PayrollPage from '../pages/PayrollPage';
import PerformancePage from '../pages/PerformancePage';
import './dashboard.css';


const Dashboard = () => {
  return (
    <Router>
      <div className="dashboard-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/leave" element={<LeavePage/>} />
            <Route path="/payroll" element={<PayrollPage/>} />
            <Route path="/performance" element={<PerformancePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Dashboard;
