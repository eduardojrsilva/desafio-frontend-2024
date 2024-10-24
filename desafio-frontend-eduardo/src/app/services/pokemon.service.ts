import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonByTypeResponse, PokemonResponse } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL = 'https://pokeapi.co/api/v2';

  constructor(private HttpClient: HttpClient) { }

  getPokemonByType(type: string): Observable<PokemonByTypeResponse> {
    return this.HttpClient.get<PokemonByTypeResponse>(`${this.baseURL}/type/${type}`);
  }

  getPokemonByUrl(url: string): Observable<PokemonResponse> {
    return this.HttpClient.get<PokemonResponse>(url);
  }
}
