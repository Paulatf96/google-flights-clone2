import React from "react";
import { Routes, Route } from "react-router";
import Flights from "../flights/pages/flights/Flights";
import FlightsResults from "../flights/pages/flightsResults/FlightsResults";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Flights />} />
      <Route path="/result-flights" element={<FlightsResults />} />
    </Routes>
  );
};

export default AppRouter;
