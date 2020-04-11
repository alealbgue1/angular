import { Component, OnInit } from '@angular/core';
import { SucesosService } from 'src/app/services/sucesos.service';
import { UpdateMenuService } from 'src/app/services/update-menu.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-fenomenos-listar',
  templateUrl: './fenomenos-listar.component.html',
  styleUrls: ['./fenomenos-listar.component.css']
})
export class FenomenosListarComponent implements OnInit {

  private sucesos: Object[];

  public navBar = {
	isNavbarCollapsed: true,
	personas: {
		dropdown: true
	},
	login: false,
	usuario: ""
}
private resLogin$: Observable<any>;

	constructor(private servicioSucesos: SucesosService, private servicioUpdateMenu: UpdateMenuService, private ruta: Router, private servicioLogin: LoginService) {
		console.log("constructor");
		this.sucesos = [{id:-1, nombre:"", lugar:"", fecha:"", descripcion:"", tipo:""}];

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
		this.servicioSucesos.listar().subscribe(
			res=>{ 
				this.sucesos = res;
			},
			error=>console.log(error)
		)
  }

  borrar(id){
	  	console.log(id);
		this.servicioSucesos.borrar(id).subscribe(
			res=>{
				console.log(res);
				this.sucesos = res;
			}
		);

		this.ruta.navigate(['/fenomenos-listar']);
  }

}
