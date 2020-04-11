import { Component, OnInit } from '@angular/core';
import { InvestigadorService } from 'src/app/services/investigador.service';
import { UpdateMenuService } from 'src/app/services/update-menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investigador-listado',
  templateUrl: './investigador-listado.component.html',
  styleUrls: ['./investigador-listado.component.css']
})
export class InvestigadorListadoComponent implements OnInit {

  private listaInv: any;


	constructor(private servicioInvestigadores: InvestigadorService, private servicioUpdateMenu: UpdateMenuService, private ruta: Router) {
		console.log("constructor");
		this.listaInv = [{id:-1, nombre:"", apellidos:"", email:"", clave:""}];
	 }

  ngOnInit() {
		this.servicioInvestigadores.listar().subscribe(
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
					this.listaInv = res;
			},
			error=>console.log(error)
		)
  }

  borrar(id){
	console.log(id);
	
	this.servicioInvestigadores.borrar(id).subscribe(
		res=>{
			console.log(res);
			this.listaInv = res;
		}
	);

	this.ruta.navigate(['/investigadores-listar']);

}

}
