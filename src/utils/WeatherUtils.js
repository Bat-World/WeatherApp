import { getWeatherImageDay, getWeatherImageNight } from "./Imgsutils";

export const getWeatherData = async (weatherApiKey, selectedCity) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`,
      { method: "get", headers: { "Content-Type": "application/json" } }
    );

    const result = await response.json();
    console.log(result);

    const weatherData = {
      dayPhoto: getWeatherImageDay(
        result.forecast.forecastday[0].day.condition.text
      ),
      nightPhoto: getWeatherImageNight(
        result.forecast.forecastday[0].day.condition.text
      ),
      max_c: result.forecast.forecastday[0].day.maxtemp_c,
      min_c: result.forecast.forecastday[0].day.mintemp_c,
      max_f: result.forecast.forecastday[0].day.maxtemp_f,
      min_f: result.forecast.forecastday[0].day.mintemp_f,
      condition: result.forecast.forecastday[0].day.condition.text,
      date: result.forecast.forecastday[0].date,
      precipitation: result.current.precip_mm,
      humidity: result.current.humidity,
    };

    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};


