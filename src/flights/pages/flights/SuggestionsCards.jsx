import React from "react";
import { CardMedia, CardContent, Typography, Box, Grid2 } from "@mui/material";

const SuggestionsCards = () => {
  const suggestions = [
    {
      city: "Londres",
      price: "1.080 €",
      dates: "2 feb-9 feb",
      time: "4 stops · 30 h 48 min",
      img: "https://www.clarin.com/2018/05/05/HJ7fwuhpf_1256x620__1.jpg",
    },
    {
      city: "New York",
      price: "376 €",
      dates: "3 feb-9 feb",
      time: "1 stop · 7 h 38 min",
      img: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
    },
    {
      city: "Paris",
      price: "979 €",
      dates: "23 ene-29 ene",
      time: "2 stops ·22 h 43 min",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33vLeg1FRMJ30VNtHf6e3BlHWaPuGH8ZHxQ&s",
    },
    {
      city: "Athens",
      price: "1.100 €",
      dates: "11 feb-20 feb",
      time: "4 stops · 35 h 48 min",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOKPhqKFWfKpftTHExlr34XCkiP_hHuEbUw&s",
    },
    {
      city: "Madrid",
      price: "800 €",
      dates: "20 feb-28 feb",
      time: "1 stops · 08 h 48 min",
      img: "https://www.civitatis.com/f/pseo/espana/madrid/puerta-alcala-madrid-1200.jpg",
    },
  ];

  return (
    <Grid2 container spacing={5} width="100%">
      {suggestions.map((suggestion, index) => (
        <Grid2 xs={4} md={1} key={index}>
          <CardMedia
            component="img"
            height="80"
            image={suggestion.img}
            alt={suggestion.city}
            style={{ borderRadius: 10, minWidth: 162, width: 162 }}
          />
          <CardContent style={{ padding: 0 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={0.5}
            >
              <Typography variant="subtitle2" component="div">
                {suggestion.city}
              </Typography>
              <Typography variant="subtitle2" component="div" fontWeight="bold">
                {suggestion.price}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={0.5}>
              <Typography variant="body2" color="text.secondary">
                {suggestion.dates}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography variant="body2" color="text.secondary">
                {suggestion.time}
              </Typography>
            </Box>
          </CardContent>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default SuggestionsCards;
