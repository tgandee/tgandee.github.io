import * as React from "react";
import EmailIcon from "@mui/icons-material/Email";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { dialogStyles, navbarStyles } from "../styles";

const emails = ["tygandee@gmail.com"];

const ContactMe = ({ setOpen: parentSetOpen, open }) => {
  return (
    <Dialog sx={dialogStyles} onClose={() => parentSetOpen(false)} open={open}>
      <DialogTitle align="center">Contact Me</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disableGutters>
            <ListItemButton key={email} href={"mailto:" + email}>
              <ListItemAvatar>
                <Avatar sx={navbarStyles.contact}>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default ContactMe;
