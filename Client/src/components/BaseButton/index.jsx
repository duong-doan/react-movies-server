import React from 'react';
import { Button } from '@mui/material';

const BaseButton = ({
  width,
  height,
  onClick,
  color,
  children,
  custom,
  type = 'button',
}) => {
  return (
    <Button
      variant='outlined'
      color={color}
      sx={{
        width: width,
        height: height,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        ...custom,
      }}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
