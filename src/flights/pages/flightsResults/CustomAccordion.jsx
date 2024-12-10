import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  Stack,
  Tooltip,
} from "@mui/material";

import { ExpandMore, Info } from "@mui/icons-material";
import flightSearchStore from "../../../store/flightSearchStore";
import moment from "moment";
import CustomAccordionDetails from "./CustomAccordionDetails";

const CustomAccordion = ({ flight, index }) => {
  const searchParameters = flightSearchStore((state) => state.searchParameters);
  const getAirlines = () => {
    const airLinesList = flight.legs.map((legs) => {
      return legs.carriers.marketing[0].name;
    });
    return airLinesList;
  };

  const getDuration = () => {
    const hours = Math.floor(flight.legs[0].durationInMinutes / 60);
    const minutes = flight.legs[0].durationInMinutes % 60;

    return `${hours}hr  ${minutes}min`;
  };

  const getTime = () => {
    const start = moment(flight.legs[0].departure);
    const end = moment(flight.legs[0].arrival);

    const startTimeFormatted = start.format("hh:mm A");
    const endTimeFormatted = end.format("hh:mm A");

    return `${startTimeFormatted} - ${endTimeFormatted}`;
  };
  const airlines = getAirlines();
  const logo = flight.legs[0].carriers.marketing[0].logoUrl;
  const duration = getDuration();
  const timeDepartureAndArrival = getTime();
  return (
    <Accordion key={index}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack spacing={2} direction="row" alignItems="center">
            <Box
              component="img"
              src={logo}
              alt={airlines}
              sx={{ width: 32, height: 32 }}
            />
            <Stack>
              <Stack direction="row" spacing={1}>
                <Typography>{timeDepartureAndArrival}</Typography>
                <Typography color="text.secondary" variant="caption">
                  +1
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                {airlines}
              </Typography>
            </Stack>
          </Stack>

          <Stack alignItems="center">
            <Typography>{duration}</Typography>
            <Typography variant="body2" color="text.secondary">
              {searchParameters.originSkyId} –{" "}
              {searchParameters.destinationSkyId}
            </Typography>
          </Stack>

          <Stack alignItems="center">
            <Typography>{flight.stops}</Typography>
            <Typography variant="body2" color="text.secondary">
              {flight.legs[0].segments?.length > 0
                ? flight.legs[0].segments?.length + " stops"
                : " 1 stop"}
            </Typography>
          </Stack>

          <Stack alignItems="center">
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Typography>806 kg CO2e</Typography>
              <Tooltip title="More information">
                <Info fontSize="small" color="action" />
              </Tooltip>
            </Stack>
            <Typography variant="body2">-15% emissions</Typography>
          </Stack>

          <Stack alignItems="flex-end">
            <Typography color="primary" fontWeight="bold">
              {flight.price.formatted}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              round trip
            </Typography>
          </Stack>
        </Stack>
      </AccordionSummary>
      {/* <AccordionDetails>
        <p>HOLA</p>
      </AccordionDetails> */}
      <CustomAccordionDetails flight={flight} />
    </Accordion>
  );
};

export default CustomAccordion;
