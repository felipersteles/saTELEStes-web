import axios from "axios";
import env from "react-dotenv";

const nasaAPI = axios.create({
  baseURL: "https://api.nasa.gov/",
  // timeout: 1000
});

// APOD means
// Astronomy Picture of the Day
// And you can see more in this link: https://api.nasa.gov/
const getAPOD = async () => {
  const res = await nasaAPI.get(
    `planetary/apod?api_key=${env.NASA_API_KEY}`
  );

  return res.data;
};

export const NasaService = {
  getAPOD,
};
