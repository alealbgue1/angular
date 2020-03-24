import { Component, OnInit } from '@angular/core';
import { PersonasService } from "../../services/personas.service";
import { UpdateMenuService } from "../../services/update-menu.service";
import { Router } from '@angular/router';

import { LoginService } from "../../services/login.service";


@Component({
  selector: 'app-personas-anade',
  templateUrl: './personas-anade.component.html',
  styleUrls: ['./personas-anade.component.css']
})
export class PersonasAnadeComponent implements OnInit {

	private persona: {dni:string, nombre:string, apellidos:string};

	constructor(private servicioPersonas: PersonasService, private servicioUpdateMenu: UpdateMenuService, 
									private ruta: Router, private servicioLogin: LoginService) {
		this.persona = {
			dni:"",
			nombre:"",
			apellidos:""
		}
	 }

  ngOnInit() {  //  Con esto evitamos que intente añadir uno nuevo (sin haber hecho login) poniendo la dirección en la url,
		//  Validamos el JWT que pudiera haber en localhost:
		if ((!localStorage.JWT) || ((localStorage.JWT.split(".").length != 3))) {
			//  No hay JWT, o no tiene el formato correcto.
			//  Vamos a inicio:
			this.ruta.navigate(['login']);
		} else {
			this.servicioLogin.validarLogin().subscribe(
				res =>{
					console.log("validar: ", res);
					if (!res.servicio) {  //  Si no devuelve servicio, es que el JWT NO es válido.
						//  Vamos a inicio:
						this.ruta.navigate(['login']);
					}
				},
				error => console.log(error)
			);
		}
	}
	
	validar(log) {
		console.log(log);
		//  Añadimos una nueva persona:
		this.servicioPersonas.anadir(log).subscribe(
			res=>{
				if ((res.sesion) && (res.sesion == "NO")) {
					//  No se ha iniciado sesión, nos vamos al login:
					localStorage.JWT = "";
					localStorage.nombreUsuario = "";
					//  Actualizamos el menú principal:
					this.servicioUpdateMenu.establecerLogin({login: false, usuario:""});
					//  Vamos a inicio:
					this.ruta.navigate(['login']);
				} else {
					alert("Persona añadida PERFECTAMENTE!!!!");
					//  Vamos a la lista de personas:
					this.ruta.navigate(['personas-listar']);
				}
			},
			error=>console.log(error)
		);
	}


}
