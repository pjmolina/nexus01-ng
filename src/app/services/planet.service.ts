import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Planet, PlanetResponse } from '../domain/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  // getPlanets(): Planet[] {}

  getPlanetById(id: number): Observable<Planet> {
    const url = `https://swapi.dev/api/planets/${encodeURIComponent(id)}`;
    return this.http.get<PlanetResponse>(url).pipe(
      map(pr => convertToPlanet(pr))
    );
  }
}


const convertToPlanet = (p: PlanetResponse): Planet => {
  return {
    ...p,
    rotation_period: parseInt(p.rotation_period, 10),
    orbital_period: parseInt(p.orbital_period, 10),
    diameter: parseInt(p.diameter, 10),
    gravity: parseInt(p.gravity, 10),
    surface_water: parseInt(p.surface_water, 10),
    population: parseInt(p.population, 10),
    created: new Date(Date.parse(p.created)),
    edited: new Date(Date.parse(p.edited)),
  } as Planet;
};
