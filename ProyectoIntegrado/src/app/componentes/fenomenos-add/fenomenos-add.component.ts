import { Component, OnInit } from '@angular/core';
import { SucesosService } from 'src/app/services/sucesos.service';
import { UpdateMenuService } from 'src/app/services/update-menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-fenomenos-add',
  templateUrl: './fenomenos-add.component.html',
  styleUrls: ['./fenomenos-add.component.css']
})
export class FenomenosAddComponent implements OnInit {

  private fenomenos: any;

  private idFenomeno: number;

  private texto: string;

	constructor(private servicioSucesos: SucesosService , private servicioUpdateMenu: UpdateMenuService, 
									private ruta: Router, private route: ActivatedRoute) {
		this.fenomenos = {id: -1, nombre:"", lugar:"", fecha: Date, descripcion:"", tipo:""}
	 }

  ngOnInit() {
	  const id = this.route.snapshot.params["id"];

	  this.idFenomeno = id;

	  if(id == -1)
		this.texto = "Añadir";
	  else{
		this.servicioSucesos.getDetallesFenomenos(id).subscribe(
			res=>{
				this.fenomenos=res;
			}
		)

		this.texto = "Modificar";
	  }
		
		
	}
	
	validar(log) {
		console.log(log);
		//  Añadimos una nueva fenomenos:
		if(this.idFenomeno == -1){
			this.servicioSucesos.anadir(log).subscribe(
				res=>{
						alert("fenomenos añadido PERFECTAMENTE!!!!");
						//  Vamos a la lista de fenomenoss:
						this.ruta.navigate(['fenomenos-listar']);
				},
				error=>console.log(error)
			);
		}else{
			this.fenomenos.id = this.idFenomeno;
			console.log(this.fenomenos);
			this.servicioSucesos.modificar(this.fenomenos).subscribe(
				res=>{
					alert("Fenómeno modificado PERFECTAMENTE!!!");
					this.ruta.navigate(['fenomenos-listar']);
				},
				error=>console.log(error)
			)

		}
	}

}
