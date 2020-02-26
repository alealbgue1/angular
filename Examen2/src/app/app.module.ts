import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AlumnosListadoComponent } from './componentes/alumnos-listado/alumnos-listado.component';
import { EstadoscivilesComponent } from './componentes/estadosciviles/estadosciviles.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AlumnoFormComponent } from './componentes/alumno-form/alumno-form.component';
import { AlumnoDelComponent } from './componentes/alumno-del/alumno-del.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosListadoComponent,
    EstadoscivilesComponent,
    InicioComponent,
    AlumnoFormComponent,
    AlumnoDelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
