import React, { useState } from "react";
import { FormControl, Grid, MenuItem, Select } from "@mui/material";
import flightSearchStore from "../../../store/flightSearchStore";
import { Form } from "react-router";

const SelectCabinClass = () => {
  const [valueClass, setValueClass] = useState();
  const updateSearchParameter = flightSearchStore(
    (state) => state.updateSearchParameter
  );

  const handleChange = (value) => {
    setValueClass(value);
    updateSearchParameter("travelClass", value);
  };
  return (
    <Grid item xs={12} md={2}>
      <FormControl fullWidth>
        <Select
          value={valueClass}
          onChange={(e) => handleChange(e.target.value)}
          variant="standard"
          defaultValue="economy"
          style={{ minWidth: 120 }}
        >
          <MenuItem value="economy">Economy</MenuItem>
          <MenuItem value="premium_economy">Premium economy</MenuItem>
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="first">First</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectCabinClass;
