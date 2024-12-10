import axios from "axios";

export default class HttpClient {
  async get(endPoint, params) {
    return axios.get(`${import.meta.env.VITE_BASE_URL}${endPoint}`, {
      params,
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPPI_KEY,
        "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
      },
    });
  }
}
