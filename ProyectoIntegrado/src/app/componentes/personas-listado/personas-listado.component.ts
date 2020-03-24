import { Component, OnInit } from '@angular/core';
import { PersonasService } from "../../services/personas.service";
import { UpdateMenuService } from "../../services/update-menu.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas-listado',
  templateUrl: './personas-listado.component.html',
  styleUrls: ['./personas-listado.component.css']
})
export class PersonasListadoComponent implements OnInit {

	private listaPer: Object[];

	constructor(private servicioPersonas: PersonasService, private servicioUpdateMenu: UpdateMenuService, private ruta: Router) {
		console.log("constructor");
		this.listaPer = [{ID:-1, DNI:"", NOMBRE:"", APELLIDOS:""}];
	 }

  ngOnInit() {
		this.servicioPersonas.listar().subscribe(
			res=>{
				if ((res.sesion) && (res.sesion == "NO")) {
					//  No se ha iniciado sesión, nos vamos al login:
					localStorage.JWT = "";
					localStorage.nombreUsuario = "";
					//  Actualizamos el menú principal:
					this.servicioUpdateMenu.establecerLogin({login: false, usuario:""});
					//  Vamos a inicio:
					this.ruta.navigate(['login']);
				} else 
					this.listaPer = res;
			},
			error=>console.log(error)
		)
  }

}
