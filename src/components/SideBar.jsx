import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import React from "react";

const SideBar = () => {
  return (
    <Box
      // bgcolor={"#E7EBF0"}
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position={"fixed"}>
        <List>
          {/* home page */}
          <ListItem disablePadding>
            <ListItemButton component={"a"} href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          {/* pages */}
          <ListItem disablePadding>
            <ListItemButton component={"a"} href="#pages">
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          {/* group pages */}
          <ListItem disablePadding>
            <ListItemButton component={"a"} href="#group">
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>

          {/* market place */}
          <ListItem disablePadding>
            <ListItemButton component={"a"} href="#market">
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>

          {/* Friends */}
          <ListItem disablePadding>
            <ListItemButton component={"a"} href="#friends">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          {/* setting */}
          <ListItem disablePadding>
            <ListItemButton component={"a"} href="#setting">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>

          {/* Profile */}
          <ListItem disablePadding>
            <ListItemButton component={"a"} href="#profile">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          {/* dark mode */}
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
