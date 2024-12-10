import { create } from "zustand";

const flightListStore = create((set) => {
  return {
    flightList: [],
    updateFlightList: (newFlightList) =>
      set((state) => ({
        flightList: newFlightList,
      })),
  };
});

export default flightListStore;
