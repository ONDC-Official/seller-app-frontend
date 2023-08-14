import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

// 8You have unsaved changes. If you leave, your changes will not be saved.
const CustomDialog = (props) => {
  const { showDialog, onClose, onDiscard, onOk, title, message, discardButtonText, okButtonText } = props;
  return (
    <Dialog open={showDialog} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onDiscard} color="primary">
          {discardButtonText}
        </Button>
        <Button onClick={onOk} color="primary">
          {okButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
