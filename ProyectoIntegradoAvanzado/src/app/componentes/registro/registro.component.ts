import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { Router } from '@angular/router';

import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	private registro: {nombre:string, apellidos:string, email:string, clave:string, clave2:string};
	private correoCorrecto: boolean = true;
	private checkCorreo: boolean = false;

  constructor(private servicioLogin: LoginService, private ruta: Router) {
		this.registro = {
			nombre: "Ale",
			apellidos: "Albarreal",
			email:"ale@mail.com", 
			clave:"", 
			clave2:""
		};
	 }

  ngOnInit() {
		var hash = CryptoJS.SHA3("2 que van corriendo llegan tarde a misa. Dos llegan a tiempo, sin ir deprisa");
		console.log("hash = ", hash);
		console.log("de otra forma: ", hash.toString(CryptoJS.enc.Base64));
		//  qU3rsk7rmmfYV8AJweQjIWuVtnZfP1hilyH9ZNEgEn3cMMUf/Jx3bMZauv0UbykoJQo1ZfJZJsevOQXLESwYkw==   (ProgramaciónExtrema.com)
		//  e7Sqezn2+jByh122c5/3Y7xX0I+3UQyzReWP3AqGhndwgapZThoB8G3bwhQ/teRv9mTolZJyfbr6YpYSqIE2og==   (ProgramaciónExtrema.es)
		//  qE9pEDw02vBtdW0ypD+/QOrERRC3ixtm2XWlm9MXZbd7iALvkdqtSiDwVD2SIWrccx7B8KD5bvkou6PrjOWk2w==   (com)
		//  WrAO+AtSqs35f4gBIf7rVqYXawZtTj3xrPl06BEJBTA4Z/JJpuOw3wWip/6XdIU/lbBO1wQR52MgYI9EpyS8Yg==   (2 que van corriendo llegan tarde a misa. Dos llegan a tiempo, sin ir deprisa)
	}


	checkEmail(email:string){
		console.log("Comprobamos el email: ", email);
		this.checkCorreo = true;
		this.servicioLogin.checkCorreo(email).subscribe(
			res=>{
				console.log(res);
				//  Alza la bandera si el correo está libre, o no:
				this.correoCorrecto = (res.estado && res.estado == "libre");
				this.checkCorreo = false;
			},
			error=>console.log(error)
		);
	}


	registrarse(datos){	
	//	console.log(datos);
		//  vemos si ambas claves son iguales:
		if (datos.clave != datos.clave2) {
			alert("Las claves han de ser iguales!!!");
			return;
		}
		//  Generamos el hash para la clave:
		const claveHash = CryptoJS.SHA3(datos.clave).toString(CryptoJS.enc.Base64);
		console.log("hashClave = ", claveHash);

		this.servicioLogin.registro(datos.nombre, datos.apellidos, datos.email, claveHash).subscribe(
			res => {
				console.log(res);
				if ((res.estado) && (res.estado == "OK")) {
						alert("Registro realizado perfectamente!!!");
					//  Nos vamos al login:
					this.ruta.navigate(['/login']);
				}
			},
			error => console.log(error)
		);
	}


	


}
