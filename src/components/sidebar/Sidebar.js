// src/components/MobileSidebar.js
import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
import {filter} from './Sidebar.css';
import { StaticImage } from "gatsby-plugin-image"

const MobileSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* Your sidebar content goes here */}
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div className="mobile-menu-icon" onClick={toggleSidebar}>
        <StaticImage src= '../../images/filter.png' className={filter}></StaticImage>
      </div>
    </div>
  );
};

export default MobileSidebar;
