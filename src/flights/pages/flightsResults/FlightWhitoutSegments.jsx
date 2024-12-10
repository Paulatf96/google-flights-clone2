import React from "react";

const FlightWhitoutSegments = ({ leg, travelClass }) => {
  return (
    <div key={leg.id}>
      <Stack
        spacing={2}
        sx={{
          pl: 2,
          borderLeft: "3px dotted",
          borderColor: "divider",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              pl: 7,
              borderLeft: "2px dotted",
              borderColor: "divider",
            }}
          />
          <Stack spacing={1} flex={1}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>
                {leg.departure} · {leg.origin.name} ({leg.origin.displayCode})
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="caption">
              Travel time: {leg.durationInMinutes} min
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>
                {leg.arrival} · {leg.destination.name} (
                {leg.destination.displayCode})
              </Typography>
            </Stack>

            <Typography variant="body2" color="text.secondary">
              {leg.marketingCarrier.name} · {travelClass} · Boeing 787 · AV 19
            </Typography>
          </Stack>
          <Stack spacing={1} alignItems="baseline" sx={{ minWidth: 200 }}>
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
              <TapAndPlayOutlinedIcon fontSize="small" color="action" />
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
    </div>
  );
};

export default FlightWhitoutSegments;
