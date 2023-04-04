import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function BaseModal({
  label,
  text,
  onClose,
  onSubmit,
  open,
  textBtnCancel = 'Cancel',
  textBtnSubmit = 'Submit',
}) {
  const handleClose = () => {
    onClose?.();
  };

  const handleSubmit = () => {
    onSubmit?.();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{label}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='secondary'>
          {textBtnCancel}
        </Button>
        <Button onClick={handleSubmit} color='secondary' autoFocus>
          {textBtnSubmit}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
