import { Component, OnInit } from '@angular/core';
import { SucesosService } from 'src/app/services/sucesos.service';
import { UpdateMenuService } from 'src/app/services/update-menu.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Fenomenos } from 'src/app/models/fenomenos';

@Component({
  selector: 'app-fenomenos-listar',
  templateUrl: './fenomenos-listar.component.html',
  styleUrls: ['./fenomenos-listar.component.css']
})
export class FenomenosListarComponent implements OnInit {

  private fenomenos: Fenomenos;

  
private resLogin$: Observable<any>;

	constructor(private servicioSucesos: SucesosService, private servicioUpdateMenu: UpdateMenuService, private ruta: Router, private servicioLogin: LoginService) {
		
	}

  ngOnInit() {

	this.servicioSucesos.listarFenomenos().subscribe(datos=>{
		console.log("Listado FENOMENOS", datos);
		this.fenomenos = datos;
  });

  }

}
