import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { WeatherResponse } from '../models/weather';

import { environment } from '../environments/environment';

const NOT_FOUND_CODE = 404;

const CITY_NOT_FOUND = 'Cidade não encontrada';
const ERROR_WHEN_SEARCHING_CITY = 'Erro ao buscar cidade';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseURL = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private HttpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    const errorMessage = error.status === NOT_FOUND_CODE ? CITY_NOT_FOUND : ERROR_WHEN_SEARCHING_CITY;

    return throwError(() => new Error(errorMessage));
  }

  getCityWeather(city: string, country?: string): Observable<WeatherResponse> {
    const qParam = [city, country].filter((value) => value).join(',');

    return this.HttpClient.get<WeatherResponse>(`${this.baseURL}`, {
      params: {
        q: qParam,
        appid: environment.weatherApiKey,
        units: 'metric',
        lang: 'pt_br',
      }
    }).pipe(
      catchError(this.handleError)
    );
  }
}
