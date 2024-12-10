import { Divider } from "@mui/material";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import DateRangeIcon from "@mui/icons-material/DateRange";
import moment from "moment";

import flightSearchStore from "../../../store/flightSearchStore";

const DateFromTo = () => {
  const searchParameters = flightSearchStore((state) => state.searchParameters);
  const [selected, setSelected] = useState(
    searchParameters.departureDate
      ? {
          from: new Date(searchParameters.departureDate),
          to: new Date(searchParameters.returnDate),
        }
      : null
  );
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [dateFrom, setDateFrom] = useState(
    searchParameters.departureDate
      ? moment(searchParameters.departureDate).format("ll")
      : "Departure"
  );
  const [dateTo, setDateTo] = useState(
    searchParameters.departureDate
      ? moment(searchParameters.returnDate).format("ll")
      : "Return"
  );
  const updateSearchParameter = flightSearchStore(
    (state) => state.updateSearchParameter
  );

  const handleSelect = (newSelected) => {
    setSelected(newSelected);
    setDateFrom(moment(newSelected.from).format("ll"));
    setDateTo(moment(newSelected.to).format("ll"));
    updateSearchParameter(
      "departureDate",
      moment(newSelected.from).format("YYYY-MM-DD")
    );
    updateSearchParameter(
      "returnDate",
      moment(newSelected.to).format("YYYY-MM-DD")
    );
  };

  const togglePicker = () => {
    setIsPickerVisible(!isPickerVisible);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          width: 400,
          height: 54.5,
          border: "1px solid lightgray",
          borderRadius: "5px",
        }}
      >
        <div style={{ width: "50%", display: "flex", alignItems: "center" }}>
          <DateRangeIcon
            color="action"
            sx={{ paddingRight: "4px", paddingLeft: "4px" }}
          />
          <span onClick={togglePicker}>{dateFrom}</span>
        </div>
        <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
        <div>
          <span onClick={togglePicker}>{dateTo}</span>
        </div>
      </div>
      <div
        style={{
          display: isPickerVisible ? "flex" : "none",
          position: "absolute",
          top: 115,
          backgroundColor: "white",
          padding: 20,
          zIndex: 10,
          border: "1px solid lightgray",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
        }}
      >
        <DayPicker
          mode="range"
          required
          disabled={{ before: new Date() }}
          selected={selected}
          onSelect={handleSelect}
        />
      </div>
    </>
  );
};

export default DateFromTo;
