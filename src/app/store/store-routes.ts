import { Routes } from "@angular/router";
import { ProductAComponent } from "./product-a/product-a.component";
import { ProductBComponent } from "./product-b/product-b.component";

export const storeRoutes: Routes = [
  {
    path: '', component: ProductAComponent,
  },
  {
    path: 'a', component: ProductAComponent
  },
  {
    path: 'b', component: ProductBComponent,

  }
];
