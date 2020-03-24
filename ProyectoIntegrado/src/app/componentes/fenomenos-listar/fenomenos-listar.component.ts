import { Component, OnInit } from '@angular/core';
import { SucesosService } from 'src/app/services/sucesos.service';
import { UpdateMenuService } from 'src/app/services/update-menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fenomenos-listar',
  templateUrl: './fenomenos-listar.component.html',
  styleUrls: ['./fenomenos-listar.component.css']
})
export class FenomenosListarComponent implements OnInit {

  private sucesos: Object[];

	constructor(private servicioSucesos: SucesosService, private servicioUpdateMenu: UpdateMenuService, private ruta: Router) {
		console.log("constructor");
		this.sucesos = [{id:-1, nombre:"", lugar:"", fecha:"", descripcion:"", tipo:""}];
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
