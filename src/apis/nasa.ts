import axios from "axios";
import { NasaMarsHoverPhotoResponse } from "../types";
import env from "react-dotenv";

const nasaAPI = axios.create({
  baseURL: "https://api.nasa.gov/",
  // timeout: 1000
});

const API_KEY = env.NASA_API_KEY;

// APOD means
// Astronomy Picture of the Day
// And you can see more in this link: https://api.nasa.gov/
const get5DaysAPODs = async () => {
  // now
  const totalNow = new Date();
  const now = totalNow.toISOString().split("T")[0];

  // five days past
  const totalFirstDay = new Date(totalNow.setDate(totalNow.getDate() - 8));
  const firstDay = totalFirstDay.toISOString().split("T")[0];

  const res = await nasaAPI.get(`planetary/apod`, {
    params: {
      api_key: API_KEY,
      start_date: firstDay,
      end_date: now,
    },
  });

  return res.data;
};

// data exemplo: 2015-6-3
const getMarsRoverPhoto = async (
  date: string
): Promise<NasaMarsHoverPhotoResponse> => {
  const res = await nasaAPI.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`
  );

  return res.data;
};

export const NasaService = {
  get5DaysAPODs,
  getMarsRoverPhoto,
};
