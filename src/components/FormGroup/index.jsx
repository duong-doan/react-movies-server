import React from 'react';

import { TextField, Box } from '@mui/material';

const FormGroup = ({ id, label, type, onChange, name, error = '' }) => {
  return (
    <Box component='div' sx={{ width: '100%', margin: '10px 0' }}>
      <TextField
        style={{ width: '100%' }}
        id={id}
        label={label}
        type={type}
        name={name}
        onChange={onChange}
      />
      {error && (
        <p style={{ fontSize: '1rem', marginTop: '10px', color: '#e17272' }}>
          {error}
        </p>
      )}
    </Box>
  );
};

export default FormGroup;
