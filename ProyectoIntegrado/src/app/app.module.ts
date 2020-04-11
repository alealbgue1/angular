import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';

import { HttpClientModule } from "@angular/common/http";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { FenomenosListarComponent } from './componentes/fenomenos-listar/fenomenos-listar.component';
import { FenomenosAddComponent } from './componentes/fenomenos-add/fenomenos-add.component';
import { InvestigadorAnadeComponent } from './componentes/investigador-anade/investigador-anade.component';
import { InvestigadorListadoComponent } from './componentes/investigador-listado/investigador-listado.component';
import { RegistroComponent } from './componentes/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    MenuPrincipalComponent,
    FenomenosListarComponent,
    FenomenosAddComponent,
    InvestigadorAnadeComponent,
    InvestigadorListadoComponent,
    RegistroComponent
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
