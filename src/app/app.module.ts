import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ResaltaDirective } from './directives/resalta.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    PlanetDetailComponent,
    ResaltaDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //s. 1 LoggerService
    // { provide: LoggerService, useClass: Logger2Service }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
