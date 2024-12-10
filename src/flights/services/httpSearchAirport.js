import HttpClient from "../infrastructure/HttpClient";

const httpClient = new HttpClient();

const httpSearchAirport = {
  getIds: async (city) => {
    const params = {
      query: city,
      locale: "en-US",
    };
    try {
      const response = await httpClient.get("v1/flights/searchAirport", params);
      return response.data;
    } catch (error) {
      console.error("Error fetching airport IDs:", error);
      throw error;
    }
  },
};

export default httpSearchAirport;
