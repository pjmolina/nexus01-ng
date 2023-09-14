import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Planet } from 'src/app/domain/planet';
import { LoggerService } from 'src/app/services/logger.service';
import { PlanetService } from 'src/app/services/planet.service';
@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit, OnDestroy {
  @Input() id?: number;
  planet?: Planet;
  error = '';
  sub?: Subscription;

  constructor(private log: LoggerService, private planetService: PlanetService) {
  }

  ngOnInit(): void {
      if (this.id) {
        this.sub = this.planetService.getPlanetById(this.id).subscribe({
          next: (planet) => {
            this.planet = planet;
            this.error = '';
          },
          error: (err) => {
            this.error = err.message;
            this.planet = undefined;
          },
          complete: () => {
            this.log.log('Observable completo');
          }
        });
      }
  }
  ngOnDestroy(): void {
      if (this.sub) {
        this.sub.unsubscribe();
        this.sub = undefined;
      }
  }
}

