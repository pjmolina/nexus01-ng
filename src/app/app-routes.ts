import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { authGuard } from "./guards/auth.guard";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PlanetDetailComponent } from "./planets/planet-detail/planet-detail.component";
import { PlanetListComponent } from "./planets/planet-list/planet-list.component";

export const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'planet/:id', component: PlanetDetailComponent },
  { path: 'planets', component: PlanetListComponent, canActivate: [authGuard]  },
  { path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },

  { path: '**', component: NotFoundComponent },
];
