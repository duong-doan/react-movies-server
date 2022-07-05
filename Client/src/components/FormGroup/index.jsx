import React from 'react';

import { TextField, Box } from '@mui/material';

const FormGroup = ({ id, label, type, onChange }) => {
  return (
    <Box component='div' sx={{ width: '100%', margin: '10px 0' }}>
      <TextField
        style={{ width: '100%' }}
        id={id}
        label={label}
        type={type}
        onChange={onChange}
      />
    </Box>
  );
};

export default FormGroup;
