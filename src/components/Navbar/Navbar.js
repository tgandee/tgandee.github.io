import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import styled from "@emotion/styled";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { mainNavbarItems } from "./consts/navbarItems";
import { navbarStyles } from "../styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const linkedin = "https://www.linkedin.com/in/tgandee/";
  const github = "https://github.com/tgandee";
  var [site, setSite] = useState(github);

  /* External site popup */
  function popup(route) {
    if (route == "linkedin") {
      setSite(linkedin);
      setOpen(true);
    } else if (route == "github") {
      setSite(github);
      setOpen(true);
    } else {
      navigate(route);
    }
  }

  return (
    <Drawer
      sx={navbarStyles.drawer}
      variant="permanent"
      anchor="left"
      open="false"
    >
      <Divider />
      <List>
        {mainNavbarItems.map((item, index) => (
          <ListItem
            button
            key={item.id}
            onClick={() => {
              popup(item.route);
            }}
          >
            <ListItemButton>
              <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
              <ListItemText sx={navbarStyles.text} primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* This portion converts the LinkedIn NavItem into a Dialog-like button*/}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Leaving Website</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            The following link will direct you to an external website. Do you
            wish to continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            autoFocus
            onClick={() => {
              window.location.href = site;
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Drawer>
  );
};

export default Navbar;
