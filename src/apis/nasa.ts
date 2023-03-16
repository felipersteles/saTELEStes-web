import axios from "axios";
import env from "react-dotenv";
import { NasaMarsHoverPhotoResponse } from "../types";

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

// data exemplo: 2015-6-3
const getMarsRoverPhoto  = async (date: string): Promise<NasaMarsHoverPhotoResponse> => {
  const res = await nasaAPI.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${env.NASA_API_KEY}`);

  return res.data;
}

export const NasaService = {
  getAPOD,
  getMarsRoverPhoto
};
