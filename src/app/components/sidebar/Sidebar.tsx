"use client";
import React, { useState } from "react";
import SideItem from "./SideItem";

// Define the Sidebar component with React.FC
const Sidebar: React.FC = () => {
  // Type the state as a boolean
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // Toggle function for sidebar
  const toggleSidebar = (): void => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="">
      <div className={`sidebar ${isSidebarOpen ? "open" : ""} bg-color`}>
        <button className="sidebar-toggle-button" onClick={toggleSidebar}>
          {isSidebarOpen ? "X" : "☰"}
        </button>
        <div className="sidebar-content">
          <div className="nav-item mt-3">
            {/* Pass props to SideItem */}
            <SideItem to="/home" icon="/home.svg" text="Home" />
            <SideItem to="/stats" icon="" text="Stats" />
            <SideItem to="/events" icon="" text="Events" />
            <SideItem to="/scrapers" icon="" text="Scrapers" />
            <SideItem to="/event-map" icon="" text="Event map" />
            <SideItem to="/categorize" icon="" text="Categorize" />
            <SideItem to="/sift" icon="" text="Sift" />
            <SideItem to="/online-ads" icon="" text="Online ads" />
            <SideItem to="/ticketing" icon="" text="Ticketing" />
            <SideItem to="/revenue" icon="" text="Revenue" />
            <SideItem to="/email" icon="" text="Email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
