// src/components/ViewsTabs.js
import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

function ViewsTabs() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box className="border-b border-gray-200">
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Dashboard" />
        <Tab label="List" />
        <Tab label="Kanban" />
        <Tab label="Workload" />
        <Tab label="Chat" />
        <Tab label="Docs" />
        <Tab label="Embed" />
        <Tab label="Files" />
      </Tabs>
    </Box>
  );
}

export default ViewsTabs;
