import React, { useState } from "react";
import flightSearchStore from "../../../store/flightSearchStore";
import { Grid, MenuItem, Select, FormControl } from "@mui/material";

const SelectTypeTrip = () => {
  const [valueTypeTrip, setValueTypeTrip] = useState();
  const updateSearchParameter = flightSearchStore(
    (state) => state.updateSearchParameter
  );

  const handleChange = (value) => {
    setValueTypeTrip(value);

    updateSearchParameter("isRoundTrip", value);
  };
  return (
    <Grid item xs={6} md={2}>
      <FormControl>
        <Select
          value={valueTypeTrip}
          defaultValue="true"
          onChange={(e) => handleChange(e.target.value)}
          variant="standard"
          fullWidth
        >
          <MenuItem value="true">Round Trip</MenuItem>
          <MenuItem value="false">One way</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectTypeTrip;
