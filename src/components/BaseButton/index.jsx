import React from 'react';
import { Button } from '@mui/material';
import { CircularProgress } from '@mui/material';

const BaseButton = ({
  width,
  height,
  onClick,
  color,
  children,
  custom,
  type = 'button',
  loading,
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
        display: 'flex',
        alignItems: 'center',
        ...custom,
      }}
      onClick={onClick}
      type={type}
    >
      {loading && (
        <CircularProgress size={20} style={{ marginRight: '10px' }} />
      )}
      {children}
    </Button>
  );
};

export default BaseButton;
