/** Planet. CLase de dominio */
export interface Planet {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: number;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

/** PlanetResponse es lo que devuelv el API ded planestas en https://swapi.dev/api/planets/3  */
export interface PlanetResponse {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}


/*

{
    "name": "Yavin IV",
    "rotation_period": "24",
    "orbital_period": "4818",
    "diameter": "10200",
    "climate": "temperate, tropical",
    "gravity": "1 standard",
    "terrain": "jungle, rainforests",
    "surface_water": "8",
    "population": "1000",
    "residents": [],
    "films": [
        "https://swapi.dev/api/films/1/"
    ],
    "created": "2014-12-10T11:37:19.144000Z",
    "edited": "2014-12-20T20:58:18.421000Z",
    "url": "https://swapi.dev/api/planets/3/"
}
*/
