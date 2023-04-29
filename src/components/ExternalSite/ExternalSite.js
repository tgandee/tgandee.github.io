import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { dialogStyles } from "../styles";

const ExternalSite = ({ setOpen: parentSetOpen, site, open }) => {
  return (
    <div>
      <Dialog
        sx={dialogStyles}
        open={open}
        onClose={() => parentSetOpen(false)}
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
            color="inherit"
            onClick={() => {
              parentSetOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            color="inherit"
            autoFocus
            onClick={() => {
              window.location.href = site;
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ExternalSite;
