import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  {path: "home", component: LandingPageComponent},
  {path: "product/:Id", component: ProductComponent},
  {path: "products", component: ProductsComponent},
  {path: "", redirectTo:"/home", pathMatch: "full"},
  {path: "**", component: LandingPageComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
