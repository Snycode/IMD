import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './component/banner/banner.component';
import { AboutComponent } from './component/about/about.component';
import { ProductsComponent } from './component/products/products.component';
import { ContactsComponent } from './component/contacts/contacts.component';

const routes: Routes = [
  { path: 'home', component: BannerComponent },
  { path: 'about', component: AboutComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: '**', component: BannerComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
