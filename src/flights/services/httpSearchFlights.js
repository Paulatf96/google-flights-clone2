import HttpClient from "../infrastructure/HttpClient";

const httpClient = new HttpClient();

const httpSearchFlights = {
  searchFlights: async (
    params,
    originSkyId,
    originEntityId,
    destinationSkyId,
    destinationEntityId
  ) => {
    const passengerCounts = params.passengers.reduce((acc, curr) => {
      const key = curr.value.toLowerCase();
      acc[key] = (acc[key] || 0) + curr.quantity;
      return acc;
    }, {});
    const paramsSearch = {
      originSkyId: originSkyId,
      destinationSkyId: destinationSkyId,
      originEntityId: originEntityId,
      destinationEntityId: destinationEntityId,
      date: params.departureDate,
      returnDate: params.returnDate,
      cabinClass: params.travelClass,
      adults: passengerCounts.adults,
      children: passengerCounts.children,
      infants: passengerCounts.infants,
      limit: 10,
      currency: "USD",
      market: "en-US",
      countryCode: "US",
    };
    try {
      const response = await httpClient.get(
        "v2/flights/searchFlightsComplete",
        paramsSearch
      );

      return response.data.data;
    } catch (error) {
      console.error("Error fetching flights:", error);
      throw error;
    }
  },
};

export default httpSearchFlights;
