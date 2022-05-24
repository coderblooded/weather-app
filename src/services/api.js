import axios from "axios";

const API_KEY = "681e15445600e79f236dfa9beaa32ee9";

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

const getCityWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}&q=${city}`);
  return response.data;
};

export { getCityWeather };
