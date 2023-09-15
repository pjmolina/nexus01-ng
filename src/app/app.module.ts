import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { routes } from './app-routes';
import { AppComponent } from './app.component';
import { ResaltaDirective } from './directives/resalta.directive';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    PlanetDetailComponent,
    ResaltaDirective,
    CurrencyPipe,
    FilterByNamePipe,
    HomeComponent,
    AboutComponent,
    PlanetListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    //s. 1 LoggerService
    // { provide: LoggerService, useClass: Logger2Service }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
