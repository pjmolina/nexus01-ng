import { Component, Input, OnInit } from '@angular/core';
import { Planet } from 'src/app/domain/planet';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  @Input() id?: number;
  planet?: Planet;
  error = '';

  constructor(private planetService: PlanetService) {
  }

  ngOnInit(): void {
      if (this.id) {
        this.planetService.getPlanetById(this.id).subscribe({
          next: (planet) => {
            this.planet = planet;
            this.error = '';
          },
          error: (err) => {
            this.error = err.message;
            this.planet = undefined;
          }
        });
      }
  }
}

