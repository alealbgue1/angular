import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from "./componentes/inicio/inicio.component";
import { LoginComponent } from "./componentes/login/login.component";
import { FenomenosListarComponent } from './componentes/fenomenos-listar/fenomenos-listar.component';
import { FenomenosAddComponent } from './componentes/fenomenos-add/fenomenos-add.component';
import { InvestigadorListadoComponent } from './componentes/investigador-listado/investigador-listado.component';
import { InvestigadorAnadeComponent } from './componentes/investigador-anade/investigador-anade.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InvestigadoresDetallesComponent } from './componentes/investigadores-detalles/investigadores-detalles.component';


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
		path:"fenomenos-listar",
		component: FenomenosListarComponent
	},

	{
		path:"fenomenos-add/:idInv",
		component: FenomenosAddComponent
	},

	{
		path:"fenomenos-mod/:idFen",
		component: FenomenosAddComponent
	},

	{
		path:"investigadores-listar",
		component: InvestigadorListadoComponent
	},

	{
		path:"investigadores-detalles/:id",
		component: InvestigadoresDetallesComponent
	},

	/*{
		path:"investigadores-form/:id",
		component: InvestigadorAnadeComponent
	},*/
	{
		path:"registro",
		component: RegistroComponent
	},


	//  Para que cuando se coloque una ruta incorrecta de forma manual en la url, vaya a donde queramos.
	//  También se puede crear un component: pagina NOT Found y que vaya a esa página
	{
		path: "**",
		redirectTo: ''
		//  component: PaginaNoEncontradaComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
