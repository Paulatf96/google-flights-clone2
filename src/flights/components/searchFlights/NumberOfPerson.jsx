import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Box, Typography, Grid } from "@mui/material";

import flightSearchStore from "../../../store/flightSearchStore";

const NumberOfPerson = () => {
  const [typesOfPerson, setTypesOfPerson] = useState([
    { value: "Adults", details: " ", quantity: 0 },
    { value: "Children", details: "Aged 2-11", quantity: 0 },
    { value: "Infants", details: "In seat", quantity: 0 },
    { value: "Infants", details: "On lap", quantity: 0 },
  ]);

  const [totalPersons, setTotalPersons] = useState(0);

  const updateSearchParameter = flightSearchStore(
    (state) => state.updateSearchParameter
  );

  const CustomMenuItem = ({ key, type, index }) => {
    return (
      <MenuItem
        key={key}
        sx={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <span>{type.value}</span>
          <Typography variant="caption">{type.details}</Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            paddingLeft: "10px",
          }}
        >
          <IconButton
            size="small"
            color="primary"
            onClick={() => updateQuantity(index, -1)}
            style={{ backgroundColor: "lightblue", borderRadius: "10%" }}
          >
            <RemoveIcon />
          </IconButton>
          <span>{type.quantity}</span>
          <IconButton
            size="small"
            color="primary"
            onClick={() => updateQuantity(index, 1)}
            style={{ backgroundColor: "lightblue", borderRadius: "10%" }}
          >
            <AddIcon />
          </IconButton>
        </div>
      </MenuItem>
    );
  };

  const updateQuantity = (index, value) => {
    const updatedTypesOfPerson = typesOfPerson.map((person, i) => {
      if (i === index) {
        return {
          ...person,
          quantity: Math.max(0, person.quantity + value),
        };
      }
      return person;
    });
    setTypesOfPerson(updatedTypesOfPerson);
    updateParameters(updatedTypesOfPerson);
    upDateTotalPersons(updatedTypesOfPerson);
  };

  const updateParameters = (updatedTypesOfPerson) => {
    const filteredPersons = updatedTypesOfPerson.filter(
      (person) => person.quantity > 0
    );
    updateSearchParameter("passengers", filteredPersons);
  };

  const upDateTotalPersons = (updatedTypesOfPerson) => {
    const total = updatedTypesOfPerson.reduce(
      (sum, person) => sum + person.quantity,
      0
    );
    setTotalPersons(total);
  };

  return (
    <Grid item xs={6} md={2}>
      <FormControl fullWidth>
        <Box
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <PersonOutlineIcon
            color="action"
            fontSize="small"
            sx={{ paddingRight: 1 }}
          />
          <span>{totalPersons}</span>
        </Box>
        <Select style={{ minWidth: 120 }} variant="standard">
          {typesOfPerson.map((type, index) => (
            <CustomMenuItem
              key={type.value + index}
              type={type}
              index={index}
            />
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default NumberOfPerson;
