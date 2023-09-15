import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/domain/planet';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  planets?: Planet[] = undefined;

  constructor(private planetService: PlanetService) {
  }
  ngOnInit() {
    this.planetService.getPlanets().subscribe(data => {
      this.planets = data;
    });
  }

}
