import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Grid } from "@mui/material";

const SearchMovie = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={10} md={8} margin="auto">
        <Autocomplete
          autoComplete
          disablePortal
          id="combo-box-demo"
          options={[]}
          sx={{ width: "100%", color: "white" }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
          style={{ margin: "auto", color: "white" }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchMovie;
