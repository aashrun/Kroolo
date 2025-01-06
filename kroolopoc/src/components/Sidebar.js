// src/components/Sidebar.js
import React from "react";
import {
    Drawer,
    Box,
    List,
    ListSubheader,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

// Icons (pick whichever suits your design best)
import EngineeringIcon from "@mui/icons-material/Engineering";
import InboxIcon from "@mui/icons-material/Inbox";
import ForumIcon from "@mui/icons-material/Forum";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ChatIcon from "@mui/icons-material/Chat";
import FolderIcon from "@mui/icons-material/Folder";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AccessTimeIcon from "@mui/icons-material/AccessTime";


function Sidebar() {
    return (
        <div className="p-0 m-0">


            <Drawer variant="permanent" open>
                {/* Adjust width, background, etc. as needed */}
                <Box className="w-52 bg-white h-screen shadow">

                    {/* Top-level workspace name (Engineering) */}
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <EngineeringIcon />
                            </ListItemIcon>
                            <ListItemText primary="Engineering" />
                        </ListItem>
                    </List>

                    {/* General / Quick Access Items */}
                    <List subheader={<ListSubheader>General</ListSubheader>}>
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <ForumIcon />
                            </ListItemIcon>
                            <ListItemText primary="Direct Messages" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <AssignmentIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Tasks" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <SmartToyIcon />
                            </ListItemIcon>
                            <ListItemText primary="AI Agents" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <ChatIcon />
                            </ListItemIcon>
                            <ListItemText primary="Chat with Anything" />
                        </ListItem>
                    </List>

                    {/* Projects Section */}
                    <List subheader={<ListSubheader>Projects</ListSubheader>}>
                        <ListItem button>
                            <ListItemIcon>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary="Apollo Deployment" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary="MVP 1" />
                        </ListItem>

                        {/* Add more projects as needed */}
                    </List>

                    {/* Sprints Section */}
                    <List subheader={<ListSubheader>Sprints</ListSubheader>}>
                        <ListItem button>
                            <ListItemIcon>
                                <DirectionsRunIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sprint 1" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <DirectionsRunIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sprint 2" />
                        </ListItem>
                    </List>

                    {/* Time Tracking */}
                    <List subheader={<ListSubheader>Time Tracking</ListSubheader>}>
                        <ListItem button>
                            <ListItemIcon>
                                <AccessTimeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Time Tracking" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}

export default Sidebar;
