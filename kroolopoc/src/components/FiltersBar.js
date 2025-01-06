// src/components/FiltersBar.js
import React from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

function FiltersBar() {
  return (
    <Box className="flex items-center justify-between p-2 border-b">
      <Box className="flex items-center gap-2">
        <Typography variant="body2" className="font-bold">
          Group By:
        </Typography>
        <Button
          variant="outlined"
          endIcon={<ArrowDropDownIcon />}
          className="text-sm"
        >
          Status
        </Button>

        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          className="text-sm"
        >
          Filters
        </Button>
      </Box>

      <TextField
        variant="outlined"
        size="small"
        placeholder="Search task"
        className="w-60"
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
}

export default FiltersBar;
