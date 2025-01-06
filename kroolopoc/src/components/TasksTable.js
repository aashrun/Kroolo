// src/components/TasksTable.js
import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Chip,
} from "@mui/material";

// Example data (replace with real data from your API/store)
const tasks = [
  {
    id: 1,
    name: "Setup Project Structure",
    status: "Open",
    priority: "Medium",
    dueDate: "Jan 02",
    reportedBy: { name: "Shashank", avatar: "https://via.placeholder.com/40" },
    assignee: { name: "Alex", avatar: "https://via.placeholder.com/40" },
    type: "Task",
    taskID: "8FX0J7-14",
    tags: ["UI", "Backend"],
    module: "Workspace",
  },
  {
    id: 2,
    name: "Fix Login Bug",
    status: "In Progress",
    priority: "Urgent",
    dueDate: "Dec 02",
    reportedBy: { name: "Priya", avatar: "https://via.placeholder.com/40" },
    assignee: { name: "Shashank", avatar: "https://via.placeholder.com/40" },
    type: "Bug",
    taskID: "8FX0J7-15",
    tags: ["Security"],
    module: "Global",
  },
  // Add more tasks...
];

// Helpers for color-coding MUI Chips
function getStatusColor(status) {
  switch (status) {
    case "Open":
      return "info";      // MUI color
    case "In Progress":
      return "warning";
    case "Closed":
      return "success";
    default:
      return "default";
  }
}

function getPriorityColor(priority) {
  switch (priority) {
    case "Urgent":
      return "error";
    case "High":
      return "warning";
    case "Medium":
      return "info";
    default:
      return "default";
  }
}

function TasksTable() {
  return (
    <TableContainer component={Paper} className="mt-2">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Reported By</TableCell>
            <TableCell>Assignee</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Task ID</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Module</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id} className="hover:bg-gray-50">
              <TableCell>{task.name}</TableCell>
              <TableCell>
                <Chip
                  label={task.status}
                  color={getStatusColor(task.status)}
                  size="small"
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={task.priority}
                  color={getPriorityColor(task.priority)}
                  size="small"
                />
              </TableCell>
              <TableCell>{task.dueDate}</TableCell>

              <TableCell>
                <Avatar
                  alt={task.reportedBy.name}
                  src={task.reportedBy.avatar}
                  className="inline-block"
                />
              </TableCell>
              <TableCell>
                <Avatar
                  alt={task.assignee.name}
                  src={task.assignee.avatar}
                  className="inline-block"
                />
              </TableCell>
              <TableCell>
                <Chip label={task.type} variant="outlined" size="small" />
              </TableCell>
              <TableCell>{task.taskID}</TableCell>
              <TableCell>
                {task.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" className="mr-1" />
                ))}
              </TableCell>
              <TableCell>{task.module}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TasksTable;
