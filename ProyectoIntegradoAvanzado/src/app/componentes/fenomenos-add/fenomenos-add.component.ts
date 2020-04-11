import { Component, OnInit } from '@angular/core';
import { SucesosService } from 'src/app/services/sucesos.service';
import { UpdateMenuService } from 'src/app/services/update-menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Fenomenos } from 'src/app/models/fenomenos';
import { Inv } from 'src/app/models/inv';
import { Tipos } from 'src/app/models/tipos';
import { InvestigadorService } from 'src/app/services/investigador.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fenomenos-add',
  templateUrl: './fenomenos-add.component.html',
  styleUrls: ['./fenomenos-add.component.css']
})
export class FenomenosAddComponent implements OnInit {

	private fenomenos: Fenomenos;
	private investigadores: Inv;
	private types: Tipos[];

	private idInvGlobal: number;
	private idFenGlobal: number;

	private texto: string;

	constructor(private servicioInvestigadores: InvestigadorService,private servicioSucesos: SucesosService , private servicioUpdateMenu: UpdateMenuService, 
									private ruta: Router, private route: ActivatedRoute) {
		this.fenomenos = <Fenomenos>{};
		this.investigadores = <Inv>{};
	 }

  ngOnInit() {
	  const idInv = this.route.snapshot.params["idInv"];
	  this.idInvGlobal = idInv;

	  console.log("idInv", idInv)

	  const idFen = this.route.snapshot.params["idFen"];
	  this.idFenGlobal = idFen;

	  console.log("idFenomeno", idFen);

	  this.servicioSucesos.getTypes().subscribe(datos=>{
		  console.log("Tipos", datos);
		  this.types = datos;
	  })

	  if(idInv){
		this.servicioInvestigadores.obtenerInvId(idInv).subscribe(datos=>{
			this.investigadores = datos;
		})
		this.texto = "Añadir";
	  }

	  if(idFen){
		this.servicioSucesos.getFenomenosId(idFen).subscribe(datos=>{
			console.log("Entró", datos);
			this.fenomenos = datos;
			this.investigadores = datos.inv;
			this.fenomenos.tipos = environment.seleccionaObj(this.types, this.fenomenos.tipos);
			//this.suceso.riesgo = environment.seleccionaObj(this.arrRiesgos, this.suceso.riesgo);
		})
		this.texto = "Modificar";
	  }
	  
	  
		
	}
	
	validar(log) {
		console.log("Log", log);
		this.fenomenos.inv = this.investigadores;
		this.fenomenos.tipos = log.tipos;

		console.log(this.fenomenos)
		if(this.idInvGlobal){
			this.servicioSucesos.anadeFenomenos(this.fenomenos).subscribe(datos=>{
				console.log("Fenomenos", datos);
				if(datos.result == "OK")
					alert("Fenomero AÑADIDO CON ÉXITO");
				this.ruta.navigate(['/investigadores-detalles/'+this.investigadores.id])
			})
		}

		if(this.idFenGlobal){
			this.servicioSucesos.modificaFenomenos(this.fenomenos).subscribe(datos=>{
				console.log("Fenomenos", datos);
				if(datos.result == "OK")
					alert("Fenomero MODIFICADO CON ÉXITO");
				this.ruta.navigate(['/investigadores-detalles/'+this.investigadores.id])
			})
		}
		

		
	}

}
