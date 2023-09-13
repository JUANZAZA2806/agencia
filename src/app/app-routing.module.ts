import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DestinosComponent } from './components/layout/content/content_componentes/destinos/destinos.component';
import { HomeComponent } from './components/layout/content/content_componentes/home/home.component';
import { ReferenciasfComponent } from './components/layout/content/content_componentes/referenciasf/referenciasf.component';
import { TokioComponent } from './components/layout/content/content_componentes/tokio/tokio.component';
import { VeneciaComponent } from './components/layout/content/content_componentes/venecia/venecia.component';
import { ViajerosComponent } from './components/layout/content/content_componentes/viajeros/viajeros.component';
import { LondresComponent } from './components/layout/content/content_componentes/londres/londres.component';
import { NewyortComponent } from './components/layout/content/content_componentes/newyort/newyort.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path: "destinos",
    component: DestinosComponent
  },
  {
    path: "viajeros",
    component: ViajerosComponent
  },
  {
    path: "familiares",
    component: ReferenciasfComponent
  },
  {
    path:"newyork",
    component:NewyortComponent
  },
  {
    path:"londres",
    component:LondresComponent
  },
  {
    path:"venecia",
    component:VeneciaComponent
  },
  {
    path:"tokio",
    component:TokioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
