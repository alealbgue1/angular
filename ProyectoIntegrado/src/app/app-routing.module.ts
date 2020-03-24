import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from "./componentes/inicio/inicio.component";
import { LoginComponent } from "./componentes/login/login.component";
import { PersonasListadoComponent } from "./componentes/personas-listado/personas-listado.component";
import { PersonasAnadeComponent } from "./componentes/personas-anade/personas-anade.component";
import { FenomenosListarComponent } from './componentes/fenomenos-listar/fenomenos-listar.component';
import { FenomenosAddComponent } from './componentes/fenomenos-add/fenomenos-add.component';


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
		path:"fenomenos-form/:id",
		component: FenomenosAddComponent
	},

	/*{
		path: "personas-listar",
		component: PersonasListadoComponent
	},
	{
		path: "personas-add",
		component: PersonasAnadeComponent
	},*/

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
