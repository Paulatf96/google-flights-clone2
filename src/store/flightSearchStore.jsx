import { create } from "zustand";

const flightSearchStore = create((set) => {
  return {
    searchParameters: {
      originCity: "",
      destinationCity: "",
      departureDate: null,
      returnDate: null,
      passengers: [],
      travelClass: "economy",
      isRoundTrip: true,
      destinationSkyId: "",
      destinationEntityId: "",
      originSkyId: "",
      originEntityId: "",
    },
    updateSearchParameter: (field, value) =>
      set((state) => ({
        searchParameters: { ...state.searchParameters, [field]: value },
      })),
  };
});

export default flightSearchStore;
