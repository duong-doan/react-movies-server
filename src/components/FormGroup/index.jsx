import React from "react";

import { TextField } from "@mui/material";

const FormGroup = ({ id, label, type }) => {
  return (
    <div className="form-group">
      <TextField id={id} label={label} type={type} />
    </div>
  );
};

export default FormGroup;
