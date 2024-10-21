import { FormattedWeather, WeatherConditions, WeatherResponse } from "../models/weather";

export function formatWeatherResponse(weatherResponse: WeatherResponse): FormattedWeather {
  const formatted = {
    weather: weatherResponse.weather[0].main,
    description: weatherResponse.weather[0].description,
    temperature: weatherResponse.main.temp,
    city: weatherResponse.name,
    country: weatherResponse.sys.country,
  };

  return formatted;
}

const RAINING_CONDITIONS: WeatherConditions[] = [
  'Thunderstorm', 'Drizzle', 'Rain', 'Squall'
];

export function isRaining(weather: WeatherConditions): boolean {
  return RAINING_CONDITIONS.includes(weather);
}
