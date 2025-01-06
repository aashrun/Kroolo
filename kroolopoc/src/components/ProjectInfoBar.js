// src/components/ProjectInfoBar.js
import React from "react";
import { Box, Typography, LinearProgress, Button } from "@mui/material";

function ProjectInfoBar() {
  const progressValue = 38; // example: 38%

  return (
    <Box className="p-4 flex items-center justify-between bg-gray-50">
      <div className="flex items-center gap-4">
        <Typography variant="body1" className="text-gray-800">
          Project Completion
        </Typography>
        <Box className="w-32">
          <LinearProgress variant="determinate" value={progressValue} />
        </Box>
        <Typography variant="body2">{progressValue}%</Typography>
        <Typography variant="body2" className="text-gray-600">
          Project Dates: Sep 02, 2024 - Nov 28, 2024
        </Typography>
      </div>

      <Button variant="contained" color="secondary">
        + Create Next Sprint
      </Button>
    </Box>
  );
}

export default ProjectInfoBar;
