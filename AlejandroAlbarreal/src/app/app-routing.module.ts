import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListaDetalleComponent } from './lista-detalle/lista-detalle.component';


const routes: Routes = [
  {
    path: "",
    component: PrincipalComponent
  },
  {
    path: "detalle/:id/:numero",
    component: ListaDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
