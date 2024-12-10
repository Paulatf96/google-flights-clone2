import React from "react";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";

import CityFromTo from "./CityFromTo";
import DateFromTo from "./DateFromTo";
import NumberOfPerson from "./NumberOfPerson";
import flightSearchStore from "../../../store/flightSearchStore";
import httpSearchAirport from "../../services/httpSearchAirport";
import flightListStore from "../../../store/flightListStore";
import httpSearchFlights from "../../services/httpSearchFlights";
import SelectTypeTrip from "./SelectTypeTrip";
import SelectCabinClass from "./SelectCabinClass";

const SearchFlights = () => {
  const navigate = useNavigate();
  const updateSearchParameter = flightSearchStore(
    (state) => state.updateSearchParameter
  );
  const searchParameters = flightSearchStore((state) => state.searchParameters);
  const updateFlightList = flightListStore((state) => state.updateFlightList);

  const handleSearch = async () => {
    if (!areCompleteFields()) return;
    navigate("/result-flights");

    await getIds();
  };
  const areCompleteFields = () => {
    if (
      !searchParameters.originCity ||
      !searchParameters.destinationCity ||
      !searchParameters.departureDate ||
      !searchParameters.returnDate
    ) {
      return false;
    } else {
      return true;
    }
  };

  const getIds = async () => {
    updateFlightList([]);
    const originAirportsIds = await httpSearchAirport.getIds("pereira");
    const destinationAirportsIds = await httpSearchAirport.getIds("paris");
    const originSkyId = originAirportsIds?.data[0]?.skyId;
    const destinationSkyId = destinationAirportsIds?.data[0]?.skyId;
    const originEntityId = originAirportsIds?.data[0]?.entityId;
    const destinationEntityId = destinationAirportsIds?.data[0]?.entityId;
    updateSearchParameter("originSkyId", originSkyId);
    updateSearchParameter("originEntityId", originEntityId);
    updateSearchParameter("destinationSkyId", destinationSkyId);
    updateSearchParameter("destinationEntityId", destinationEntityId);
    getFlights(
      originSkyId,
      originEntityId,
      destinationSkyId,
      destinationEntityId
    );
  };

  const getFlights = async (
    originSkyId,
    originEntityId,
    destinationSkyId,
    destinationEntityId
  ) => {
    const flights = await httpSearchFlights.searchFlights(
      searchParameters,
      originSkyId,
      originEntityId,
      destinationSkyId,
      destinationEntityId
    );
    console.log(flights);
    updateFlightList(flights);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        position: "relative",
        width: "80%",
        margin: "auto",
        padding: "30px",
        borderRadius: "15px",
        backgroundColor: "#ffffff",
      }}
    >
      <FormControl sx={{ width: "100%" }}>
        <Grid container spacing={2} gap={3}>
          <SelectTypeTrip />
          <Grid item xs={12} md={2}>
            <NumberOfPerson />
          </Grid>

          <SelectCabinClass />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CityFromTo />
            </Grid>
            <Grid item xs={12} md={6}>
              <DateFromTo />
            </Grid>
          </Grid>
        </Grid>
      </FormControl>
      <div style={{ position: "absolute", bottom: -20, left: "45%" }}>
        <Button
          variant="contained"
          sx={{ borderRadius: 50, textTransform: "capitalize" }}
          onClick={handleSearch}
        >
          <SearchIcon /> <Typography>Search</Typography>
        </Button>
      </div>
    </Paper>
  );
};

export default SearchFlights;
