import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContentComponent } from './components/layout/content/content.component';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DestinosComponent } from './components/layout/content/content_componentes/destinos/destinos.component';
import { HomeComponent } from './components/layout/content/content_componentes/home/home.component';
import { ReferenciasfComponent } from './components/layout/content/content_componentes/referenciasf/referenciasf.component';
import { TokioComponent } from './components/layout/content/content_componentes/tokio/tokio.component';
import { VeneciaComponent } from './components/layout/content/content_componentes/venecia/venecia.component';
import { ViajerosComponent } from './components/layout/content/content_componentes/viajeros/viajeros.component';
import { OrigenComponent } from './components/layout/content/content_componentes/origen/origen.component';
import { ViajesComponent } from './components/layout/content/content_componentes/viajes/viajes.component';
import { LondresComponent } from './components/layout/content/content_componentes/londres/londres.component';
import { NewyortComponent } from './components/layout/content/content_componentes/newyort/newyort.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    ContentComponent,
    
    DestinosComponent,
         HomeComponent,
         ReferenciasfComponent,
         TokioComponent,
         VeneciaComponent,
         ViajerosComponent,
         OrigenComponent,
         ViajesComponent,
         LondresComponent,
         NewyortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    PanelMenuModule,
    // TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
