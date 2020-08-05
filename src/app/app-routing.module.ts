import { HomeComponent } from './modules/home/home.component';
import { IntegrantesComponent } from './modules/integrantes/integrantes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path: 'home', component: HomeComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
