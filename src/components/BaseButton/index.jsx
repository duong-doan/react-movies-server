import React from 'react';
import { Button } from '@mui/material';

const BaseButton = ({ width, height, onClick, color, text, custom }) => {
  return (
    <Button
      variant='outlined'
      color={color}
      sx={{
        width: width,
        height: height,
        textTransform: 'uppercase',
        ...custom,
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default BaseButton;
