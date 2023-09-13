/*

"count": 60,
    "next": "https://swapi.dev/api/planets/?page=2",
    "previous": null,
    "results": [
*/

export interface Page<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}
