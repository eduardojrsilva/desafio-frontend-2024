import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { PokemonByTypeResponse, PokemonResponse } from '../models/pokemon';

const POKEMON_ERROR_MESSAGE = 'Erro ao buscar pokémon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL = 'https://pokeapi.co/api/v2';

  constructor(private HttpClient: HttpClient) { }

  private handleError() {
    return throwError(() => new Error(POKEMON_ERROR_MESSAGE));
  }

  getPokemonByType(type: string): Observable<PokemonByTypeResponse> {
    return this.HttpClient.get<PokemonByTypeResponse>(`${this.baseURL}/type/${type}`).pipe(
      catchError(this.handleError)
    );
  }

  getPokemonByUrl(url: string): Observable<PokemonResponse> {
    return this.HttpClient.get<PokemonResponse>(url).pipe(
      catchError(this.handleError)
    );
  }
}
