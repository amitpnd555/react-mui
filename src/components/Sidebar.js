import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import StoreIcon from "@mui/icons-material/Store";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import Person2TwoToneIcon from "@mui/icons-material/Person2TwoTone";
import ModeNightTwoToneIcon from "@mui/icons-material/ModeNightTwoTone";

export const Sidebar = () => {
  return (
    <Box bgcolor="yellow" flex={1} p={2}>
      <List>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <EmojiPeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <SettingsTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <Person2TwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <ModeNightTwoToneIcon />
          </ListItemIcon>
          <Switch/>
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
