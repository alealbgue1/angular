import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { UpdateMenuService } from "../../services/update-menu.service";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

	public navBar = {
		isNavbarCollapsed: true,
		personas: {
			dropdown: true
		},
		login: false,
		usuario: ""
	}
	private resLogin$: Observable<any>;

  constructor(private servicioLogin: LoginService, private servicioUpdateMenu: UpdateMenuService, private ruta: Router) {
		//  Validamos el JWT que pudiera haber en localhost:
		if ((!localStorage.JWT) || ((localStorage.JWT.split(".").length != 3))) {
			this.navBar.login = false;
			this.navBar.usuario = "";
		} else {
			this.servicioLogin.validarLogin().subscribe(
				res =>{
					console.log("validar: ", res);
					if (res.servicio) {
						this.navBar.login = true;
						this.navBar.usuario = localStorage.nombreUsuario;
					}
				},
				error => console.log(error)
			);
		}
	}


  ngOnInit() {
		this.resLogin$ = this.servicioUpdateMenu.ObtenerResLogin$();
		this.resLogin$.subscribe(
			res =>{ 
				console.log(res);
				this.navBar.login = res.login;
				this.navBar.usuario = res.usuario;
			},
			error => console.log(error)
		);

	}
	
	
	cerrarLogin(){
		if (confirm("¿Deseas cerrar sesión?")) {
			localStorage.JWT = "";
			localStorage.nombreUsuario = "";
			this.navBar.login = false;
			this.navBar.usuario = "";
			 //  Vamos a inicio:
			 this.ruta.navigate(['/']);
		}
	}


}
