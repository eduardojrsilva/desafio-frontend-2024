import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseURL = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private HttpClient: HttpClient) { }

  getCityWeather(city: string, country?: string): Observable<WeatherResponse> {
    const qParam = [city, country].filter((value) => value).join(',');

    return this.HttpClient.get<WeatherResponse>(`${this.baseURL}`, {
      params: {
        q: qParam,
        appid: '',
        units: 'metric',
        lang: 'pt_br',
      }
    });
  }
}
