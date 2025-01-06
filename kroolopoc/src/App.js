import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProjectInfoBar from "./components/ProjectInfoBar";
import ViewsTabs from "./components/ViewsTabs";
import FiltersBar from "./components/FiltersBar";
import TasksTable from "./components/TasksTable";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="flex">
      {/* Left Sidebar */}
      <Sidebar />

      <Box className="flex flex-col w-full">
        <Header />
        <ProjectInfoBar />
        <ViewsTabs />
        <FiltersBar />
        <TasksTable />
      </Box>
    </Box>
  );
}

export default App;
