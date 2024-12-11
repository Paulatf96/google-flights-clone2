import React from "react";
import {
  Button,
  Container,
  Grid2,
  Typography,
  Tooltip,
  Box,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import image from "../../assets/flights.svg";
import SearchFlights from "../../components/searchFlights/SearchFlights";
import SuggestionsCards from "./SuggestionsCards";

const Flights = () => {
  const ButtonsSuggestions = () => {
    const cities = ["Pereira", "Bogotá", "Medellin", "Cali"];
    const styleButton = {
      borderRadius: 50,
      border: "1px solid lightgray",
      textTransform: "capitalize",
      width: { xs: "20%", md: "10%" },
    };

    return (
      <>
        {cities.map((city) => (
          <Button variant="outlined" sx={styleButton} key={city}>
            {city}
          </Button>
        ))}
      </>
    );
  };

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid2 container gap={2}>
        <Grid2 size={12} paddingBottom={0}>
          <img
            src={image}
            style={{
              height: "19vw",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Grid2>
        <Grid2 size={12}>
          <Typography
            variant="h2"
            textAlign={"center"}
            sx={{
              paddingBottom: 3,
              fontWeight: 400,
              fontSize: { xs: 40, md: 56 },
            }}
          >
            Flights
          </Typography>
        </Grid2>
        <Grid2 size={12}>
          <SearchFlights />
        </Grid2>
        <Grid2 size={12} sx={{ paddingX: { xs: 0, md: 11 } }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              textAlign={"justify"}
              paddingBottom={2}
              paddingTop={2}
            >
              Find cheap flights from United States to anywhere
            </Typography>
            <Tooltip title="More information">
              <InfoOutlinedIcon
                fontSize="small"
                color="action"
                style={{ cursor: "pointer", paddingLeft: 1 }}
              />
            </Tooltip>
          </div>
          <Grid2 container spacing={2} size={12} paddingBottom={2}>
            <ButtonsSuggestions />
          </Grid2>
          <Grid2 sx={{ position: "relative" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d63141782.451334655!2d-2.970703!3d15!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1733462658847!5m2!1ses!2sco"
              width={"100%"}
              height={280}
              style={{ border: 0, borderRadius: 10 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: "25%", md: "45%" },
              }}
            >
              <Button
                variant="text"
                sx={{
                  borderRadius: 50,
                  backgroundColor: "white",
                  textTransform: "capitalize",
                }}
              >
                Explore destinations
              </Button>
            </Box>
          </Grid2>
          <Grid2 container spacing={5} paddingTop={2} size={12}>
            <SuggestionsCards />
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Flights;
