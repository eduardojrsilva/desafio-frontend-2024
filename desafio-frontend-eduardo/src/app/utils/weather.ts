import { FormattedWeather, WeatherConditions, WeatherResponse } from "../models/weather";

const BASE_IMG_URL = 'https://openweathermap.org/img/wn';
const IMG_SUFFIX = '@4x.png';

function getIconUrl(iconCode: string): string {
  return `${BASE_IMG_URL}/${iconCode}${IMG_SUFFIX}`;
}

export function formatWeatherResponse(weatherResponse: WeatherResponse): FormattedWeather {
  const formatted = {
    weather: weatherResponse.weather[0].main,
    description: weatherResponse.weather[0].description,
    iconUrl: getIconUrl(weatherResponse.weather[0].icon),
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
