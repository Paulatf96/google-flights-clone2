import React, { useState } from "react";
import { Autocomplete, TextField, Box, Grid } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

import flightSearchStore from "../../../store/flightSearchStore";

const CityFromTo = () => {
  const searchParameters = flightSearchStore((state) => state.searchParameters);
  const [originCity, setOriginCity] = useState(
    searchParameters.originCity ? searchParameters.originCity : ""
  );
  const [destinationCity, setDestinationCity] = useState(
    searchParameters.destinationCity ? searchParameters.destinationCity : ""
  );
  const updateSearchParameter = flightSearchStore(
    (state) => state.updateSearchParameter
  );

  const handleChange = (parameter, value) => {
    updateSearchParameter(parameter, value);
    parameter === "originCity"
      ? setOriginCity(value)
      : setDestinationCity(value);
  };

  return (
    <Grid item xs={9} md={12} sx={{ ml: { xs: 2 } }}>
      <Box gap={1} sx={{ mb: 2, display: "flex", alignItems: "center" }}>
        <Autocomplete
          options={cities}
          value={originCity}
          onChange={(e, newValue) => handleChange("originCity", newValue)}
          renderInput={(params) => (
            <TextField {...params} placeholder={"Where From"} />
          )}
          sx={{ width: "45%" }}
        />
        <SwapHorizIcon fontSize="large" />
        <Autocomplete
          options={cities}
          value={destinationCity}
          onChange={(e, newValue) => handleChange("destinationCity", newValue)}
          renderInput={(params) => (
            <TextField {...params} placeholder="Where To" />
          )}
          sx={{ width: "45%" }}
        />
      </Box>
    </Grid>
  );
};

export default CityFromTo;

const cities = [
  "New York City",
  "Los Angeles",
  "London",
  "Paris",
  "Tokyo",
  "Sydney",
  "Dubai",
  "Beijing",
  "Toronto",
  "Pereira",
];
