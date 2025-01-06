// src/components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Avatar, Chip } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" className="bg-white shadow-none">
      <Toolbar className="flex justify-between">
        {/* Left: Workspace Name + Status Chip */}
        <div className="flex items-center gap-2">
          <Typography variant="h6" className="text-gray-800 font-bold">
            Engineering
          </Typography>
          <Chip label="On Track" color="success" size="small" />
        </div>

        {/* Right: Buttons + User Info */}
        <div className="flex items-center gap-4">
          <Button variant="outlined" className="text-sm">
            Ask AI
          </Button>
          <Button variant="outlined" className="text-sm">
            Automations
          </Button>
          <Button variant="contained" color="primary" className="text-sm">
            Share
          </Button>
          <Chip label="Public" variant="outlined" size="small" />
          <Avatar alt="Shashank" src="https://via.placeholder.com/40" />
          <Typography variant="body2">Shashank (Project Owner)</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
