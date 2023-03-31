import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material'

const SessionExpired = () => {
  return (
    <Dialog
        open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Session expired
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your session has been expired. Please login to continue.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: '16px 24px' }}>
          <Button
            variant="contained"
            onClick={() => window.location.reload()}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default SessionExpired
