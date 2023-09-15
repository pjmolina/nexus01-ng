import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductAComponent } from './product-a/product-a.component';
import { ProductBComponent } from './product-b/product-b.component';
import { storeRoutes } from './store-routes';



@NgModule({
  declarations: [
    ProductAComponent,
    ProductBComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(storeRoutes)
  ]
})
export class StoreModule { }
