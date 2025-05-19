// Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaUserClock, FaSignOutAlt, FaMoneyCheckAlt, FaCalendarCheck } from 'react-icons/fa';
import './dashboard.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
        <FaBars />
      </div>
      <nav>
        <NavLink to="/" end><FaUserClock /> {!collapsed && 'Dashboard'}</NavLink>
        <NavLink to="/attendance"><FaCalendarCheck /> {!collapsed && 'Attendance'}</NavLink>
        <NavLink to="/leave"><FaSignOutAlt /> {!collapsed && 'Leave'}</NavLink>
        <NavLink to="/payroll"><FaMoneyCheckAlt /> {!collapsed && 'Payroll'}</NavLink>
        <NavLink to="/performance"><FaMoneyCheckAlt /> {!collapsed && 'Performance'}</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
