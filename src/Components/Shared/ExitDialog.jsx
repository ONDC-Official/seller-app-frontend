import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const ExitDialog = (props) => {
  const { showExitDialog, onClose, onDiscard, onSave } = props;
  return (
    <Dialog open={showExitDialog} onClose={onClose}>
      <DialogTitle>Unsaved Changes</DialogTitle>
      <DialogContent>
        <DialogContentText>You have unsaved changes. If you leave, your changes will not be saved.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onDiscard} color="primary">
          Discard Changes
        </Button>
        <Button onClick={onSave} color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExitDialog;
