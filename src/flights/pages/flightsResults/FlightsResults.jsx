import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Tooltip,
  Skeleton,
  Grid,
  FormControl,
  Container,
  LinearProgress,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import { ExpandMore, Info } from "@mui/icons-material";

import flightListStore from "../../../store/flightListStore";

import CustomAccordion from "./CustomAccordion";
import SelectTypeTrip from "../../components/searchFlights/SelectTypeTrip";
import NumberOfPerson from "../../components/searchFlights/NumberOfPerson";
import SelectCabinClass from "../../components/searchFlights/SelectCabinClass";
import CityFromTo from "../../components/searchFlights/CityFromTo";
import DateFromTo from "../../components/searchFlights/DateFromTo";

const FlightsResults = () => {
  const [itineraries, setItineraries] = useState([]);
  const [numberOfItineraries, setNumberOfItineraries] = useState(5);
  const flightList = flightListStore((state) => state.flightList);

  useEffect(() => {
    if (flightList?.itineraries?.length > 0) {
      setItineraries(flightList.itineraries);
    }
  }, [flightList]);

  return (
    <>
      {!flightList?.itineraries?.length && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      <Container>
        <Box
          sx={{
            wigth: "100%",
            mx: "auto",
            p: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: 1000,
              mx: "auto",
              paddingTop: 5,
            }}
          >
            <FormControl
              sx={{
                width: "100%",
                display: "flex",
              }}
            >
              <Grid
                container
                spacing={2}
                gap={3}
                alignItems="center"
                justify="center"
              >
                <Grid item xs={4} md={2}>
                  <SelectTypeTrip />
                </Grid>
                <Grid item xs={4} md={2}>
                  <NumberOfPerson />
                </Grid>

                <SelectCabinClass />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <CityFromTo />
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 14 } }}>
                    <DateFromTo />
                  </Grid>
                </Grid>
              </Grid>
            </FormControl>
          </Box>
        </Box>
        {flightList?.itineraries?.length > 0 ? (
          <Box
            sx={{ maxWidth: "90%", mx: "auto", p: 2, alignItems: "baseline" }}
          >
            <Box sx={{ mb: 2 }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              >
                <Typography variant="h5" component="h1">
                  Top departing flights
                </Typography>
                <Stack
                  alignItems="center"
                  spacing={1}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <Typography color="primary">Sorted by top flights</Typography>
                </Stack>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ mb: { xs: 2, md: 1 } }}
              >
                <Typography variant="body2" color="text.secondary">
                  Ranked based on price and convenience
                </Typography>
                <Tooltip title="More information">
                  <Info fontSize="small" color="action" />
                </Tooltip>
              </Stack>

              <Typography variant="body2" color="text.secondary">
                Prices include required taxes + fees for 1 adult. Optional
                charges and bag fees may apply. Passenger assistance info .
              </Typography>
            </Box>

            <Stack>
              {itineraries.map(
                (flight, index) =>
                  index < numberOfItineraries && (
                    <CustomAccordion
                      flight={flight}
                      index={index}
                      key={flight.id || index}
                    />
                  )
              )}
            </Stack>
            <div
              onClick={() => setNumberOfItineraries(numberOfItineraries + 5)}
            >
              <Accordion>
                <AccordionSummary>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: "100%" }}
                  >
                    <ExpandMore />
                    <Typography variant="body2">View more flights</Typography>
                  </Stack>
                </AccordionSummary>
              </Accordion>
            </div>
          </Box>
        ) : (
          <Box sx={{ maxWidth: "90%", mx: "auto", p: 2, height: "100vh" }}>
            <Skeleton variant="rounded" width={"100%"} height={"100%"} />
          </Box>
        )}
      </Container>
    </>
  );
};

export default FlightsResults;
