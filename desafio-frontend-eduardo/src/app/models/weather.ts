export type WeatherConditions =
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Mist'
  | 'Smoke'
  | 'Haze'
  | 'Dust'
  | 'Fog'
  | 'Sand'
  | 'Ash'
  | 'Squall'
  | 'Tornado'
  | 'Clear'
  | 'Clouds'
  ;

export interface WeatherResponse {
  weather: Array<
    {
      main: WeatherConditions,
      description: string,
    }
  >,
  main: {
    temp: number,
  },
  sys: {
    country: string,
  },
  name: string,
}

export interface FormattedWeather {
  weather: WeatherConditions;
  description: string;
  temperature: number;
  city: string;
  country: string;
}
