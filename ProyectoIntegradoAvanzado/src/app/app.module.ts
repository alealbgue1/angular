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
import { InvestigadoresDetallesComponent } from './componentes/investigadores-detalles/investigadores-detalles.component';
import { FenomenosComponent } from './componentes/fenomenos/fenomenos.component';
import { InvestigadorBorrarComponent } from './componentes/investigador-borrar/investigador-borrar.component';
import { InvestigadorModComponent } from './componentes/investigador-mod/investigador-mod.component';

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
    RegistroComponent,
    InvestigadoresDetallesComponent,
    FenomenosComponent,
    InvestigadorBorrarComponent,
    InvestigadorModComponent
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
