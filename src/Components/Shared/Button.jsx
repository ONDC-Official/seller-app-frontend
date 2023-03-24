import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function AddButton(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        { ...props }
        variant={props.variant} 
        startIcon={props.icon} 
        className={props.className} 
        onClick={props.onClick}
        isloading={props.isloading || ''}
        disabled={props.disabled || false}
      >
        {props.title}
      </Button>
    </Stack>
  );
}
