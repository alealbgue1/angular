import { Component, OnInit } from '@angular/core';
import { InvestigadorService } from 'src/app/services/investigador.service';
import { UpdateMenuService } from 'src/app/services/update-menu.service';
import { Router } from '@angular/router';
import { Inv } from 'src/app/models/inv';

@Component({
  selector: 'app-investigador-listado',
  templateUrl: './investigador-listado.component.html',
  styleUrls: ['./investigador-listado.component.css']
})
export class InvestigadorListadoComponent implements OnInit {

  private listaInv: Inv;


	constructor(private servicioInvestigadores: InvestigadorService, private servicioUpdateMenu: UpdateMenuService, private ruta: Router) {
		
	 }

  ngOnInit() {
		this.servicioInvestigadores.listarInv().subscribe(
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
