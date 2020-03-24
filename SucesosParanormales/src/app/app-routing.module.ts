import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { FenomenosListadoComponent } from './componentes/fenomenos-listado/fenomenos-listado.component';
import { FenomenosAnadeComponent } from './componentes/fenomenos-anade/fenomenos-anade.component';


const routes: Routes = [
  {
    path: "",
    component: InicioComponent
  },
  
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "fenomenos-listar",
    component: FenomenosListadoComponent
  },

  {
    path: "fenomenos-anade",
    component: FenomenosAnadeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
