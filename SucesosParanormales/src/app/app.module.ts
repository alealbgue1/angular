import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { FenomenosAnadeComponent } from './componentes/fenomenos-anade/fenomenos-anade.component';
import { FenomenosListadoComponent } from './componentes/fenomenos-listado/fenomenos-listado.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    FenomenosAnadeComponent,
    FenomenosListadoComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
