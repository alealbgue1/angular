import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { OwnersComponent } from './components/owners/owners.component';
import { VetsComponent } from './components/vets/vets.component';
import { OwnerDetallesComponent } from './components/owner-detalles/owner-detalles.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';


const routes: Routes = [
  {
    path: "",
    component:InicioComponent
  },
  {
    path: "owners",
    component:OwnersComponent
  },
  {
    path: "vets",
    component:VetsComponent
  },
  {
    path: "detalles-owner/:id",
    component: OwnerDetallesComponent
  },
  {
    path: "form",
    component: FormOwnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
