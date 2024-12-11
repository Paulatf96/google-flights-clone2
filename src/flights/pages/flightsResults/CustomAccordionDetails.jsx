import { Info } from "@mui/icons-material";
import {
  AccordionDetails,
  Stack,
  Typography,
  Box,
  Tooltip,
  Divider,
} from "@mui/material";
import React from "react";
import TapAndPlayOutlinedIcon from "@mui/icons-material/TapAndPlayOutlined";
import UsbOutlinedIcon from "@mui/icons-material/UsbOutlined";
import AirlineSeatLegroomReducedOutlinedIcon from "@mui/icons-material/AirlineSeatLegroomReducedOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import flightSearchStore from "../../../store/flightSearchStore";
import moment from "moment";
import FlightWhitoutSegments from "./flightWhitoutSegments";

const CustomAccordionDetails = ({ flight }) => {
  const searchParameters = flightSearchStore((state) => state.searchParameters);
  const travelClass = searchParameters.travelClass;
  const getLayover = (index) => {
    const start = moment(flight.legs[0].segments[index].arrival);
    const end = moment(flight.legs[0].segments[index + 1].departure);

    const duration = moment.duration(end.diff(start));
    const hours = Math.floor(duration.asHours());
    const minutes = duration.minutes();

    return `${hours}hr ${minutes}min`;
  };
  return (
    <AccordionDetails>
      <Stack spacing={3}>
        {flight.legs[0]?.segments?.length < 1 ? (
          <FlightWhitoutSegments
            leg={flight.legs[0]}
            travelClass={travelClass}
          />
        ) : (
          <>
            {flight.legs[0]?.segments?.map((segment, segmentIndex) => (
              <div key={segmentIndex}>
                <Stack
                  spacing={2}
                  sx={{
                    pl: 2,
                  }}
                >
                  <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                    <Box
                      sx={{
                        pl: 7,
                        borderLeft: "3px dotted",
                        borderColor: "divider",
                      }}
                    />
                    <Stack spacing={1} flex={1}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>
                          {moment(segment.departure).format("hh:mm A")} ·{" "}
                          {segment.origin.name} ({segment.origin.displayCode})
                        </Typography>
                      </Stack>
                      <Typography color="text.secondary" variant="caption">
                        Travel time: {segment.durationInMinutes} min
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>
                          {moment(segment.arrival).format("hh:mm A")} ·{" "}
                          {segment.destination.name} (
                          {segment.destination.displayCode})
                        </Typography>
                      </Stack>

                      <Typography variant="body2" color="text.secondary">
                        {segment.marketingCarrier.name} · {travelClass} · Boeing
                        787 · AV 19
                      </Typography>
                    </Stack>
                    <Stack
                      spacing={1}
                      alignItems="baseline"
                      sx={{ minWidth: 200 }}
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AirlineSeatLegroomReducedOutlinedIcon
                          fontSize="small"
                          color="action"
                        />
                        <Typography variant="caption" color="text.secondary">
                          Below average legroom (29 in)
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <UsbOutlinedIcon fontSize="small" color="action" />
                        <Typography variant="caption" color="text.secondary">
                          In-seat USB outlet
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <TapAndPlayOutlinedIcon
                          fontSize="small"
                          color="action"
                        />
                        <Typography variant="caption" color="text.secondary">
                          Stream media to your device
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <PublicOutlinedIcon fontSize="small" color="action" />
                        <Typography variant="caption" color="text.secondary">
                          Emissions estimate: 48 kg CO2e
                        </Typography>
                        <Tooltip title="More information">
                          <Info fontSize="small" color="action" />
                        </Tooltip>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
                {segmentIndex < flight.legs[0].segments.length - 1 && (
                  <Stack
                    sx={{
                      pl: { xs: 2.5, md: 12 },
                      height: 40,
                      pt: 2,
                      pb: 2,
                    }}
                    key={segmentIndex + Math.random()}
                  >
                    <Divider variant="middle" />
                    <Typography
                      variant="body2"
                      height={40}
                      sx={{ pt: 2, pb: 2 }}
                    >
                      {getLayover(segmentIndex)} layover ·{" "}
                      {segment.destination.name} (
                      {segment.destination.displayCode})
                    </Typography>
                    <Divider variant="middle" />
                  </Stack>
                )}
              </div>
            ))}
          </>
        )}
      </Stack>
    </AccordionDetails>
  );
};

export default CustomAccordionDetails;
