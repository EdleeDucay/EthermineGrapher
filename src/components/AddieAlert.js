import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function AddieAlert() {
  return (
      <Alert severity="error">
        <AlertTitle>Address not found</AlertTitle>
        Check that the address you have entered is formatted correctly — <strong>Please try another address</strong>
      </Alert>
      
  );
}