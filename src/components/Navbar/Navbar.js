import React from "react";
// import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { mainNavbarItems } from "./consts/navbarItems";
import { useNavigate } from "react-router-dom";
import { useState } from "react";import MuiDrawer from '@mui/material/Drawer';
import {
  Box,
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";
import { navbarStyles } from "../styles";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const linkedin = "https://www.linkedin.com/in/tgandee/";
  const github = "https://github.com/tgandee";
  var [site, setSite] = useState(github);

  const [nav, navOpen] = useState(false);

  const handleDrawerOpen = () => {
    navOpen(true);
  };

  const handleDrawerClose = () => {
    navOpen(false);
  };

  /* External site popup */
  function popup(route) {
    if (route === "linkedin") {
      setSite(linkedin);
      setOpen(true);
    } else if (route === "github") {
      setSite(github);
      setOpen(true);
    } else {
      navigate(route);
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        open={nav}
        onClose={handleDrawerClose}
        sx={navbarStyles.drawerOpen}
      >
        <DrawerHeader>
        <IconButton
            color="inherit"
            aria-label="drawer"
            onClick={nav ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{
              minHeight: 48,
              justifyContent: 'center',
              px: 1.5,
            }}
          >
            {nav ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {mainNavbarItems.map((item, index) => (
            <ListItem
              disablePadding
              key={item.id}
              onClick={() => {
                popup(item.route);
              }}
              sx={{ display: 'block' }}
            >
              <ListItemButton sx={{
                  minHeight: 48,
                  justifyContent: nav ? 'initial' : 'center',
                  px: 2.5,
                }}>
                <ListItemIcon sx={{
                    minWidth: 0,
                    mr: nav ? 3 : 'auto',
                    justifyContent: 'center',
                    color: "inherit"
                  }}>{item.icon}</ListItemIcon>
                <ListItemText sx={{ opacity: nav ? 1 : 0 }} primary={item.label} />
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
    </Box>
  );
};

export default Navbar;
