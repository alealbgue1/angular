import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SucesosService {

  private url = environment.API_URL;

	constructor(private http: HttpClient) { }
	
	getDetallesFenomenos(id){
		var pa = JSON.stringify({
		  servicio: "getId",
		  id: id
		});
		return this.http.post<any>(this.url, pa);
	  }

	listar(){
		let pa = JSON.stringify({
			servicio: "listar"
		});
		return this.http.post<any>(this.url, pa);
	}

	anadir(fenomenos){
		//  Clonamos el objeto:
		let pa = JSON.parse(JSON.stringify(fenomenos));
		//  Le añadimos el nuevo atributo, servicio:
		pa.servicio = "insertar";
		return this.http.post<any>(this.url, JSON.stringify(pa));
	}

	modificar(fenomenos){
		let pa = JSON.parse(JSON.stringify(fenomenos));
		//  Le añadimos el nuevo atributo, servicio:
		pa.servicio = "modificar";
		return this.http.post<any>(this.url, JSON.stringify(pa));
	}

	borrar(id){
		let pa = JSON.stringify({
			servicio: "borrar",
			id: id
		});
		return this.http.post<any>(this.url, pa);
	}
}
