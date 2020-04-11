import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InvestigadorService {

  private url = environment.API_URL2;

  constructor(private http: HttpClient) { }

  	listar(){
		let pa = JSON.stringify({
			servicio: "listar"
		});
		return this.http.post<any>(this.url, pa, environment.cabecera());
	}

	anadir(inv){
		//  Clonamos el objeto:
		let pa = JSON.parse(JSON.stringify(inv));
		//  Le añadimos el nuevo atributo, servicio:
		pa.servicio = "insertar";
		return this.http.post<any>(this.url, JSON.stringify(pa), environment.cabecera());
	}

	modificar(inv){
		let pa = JSON.parse(JSON.stringify(inv));
		//  Le añadimos el nuevo atributo, servicio:
		pa.servicio = "modificar";
		return this.http.post<any>(this.url, JSON.stringify(pa), environment.cabecera());
	}

	getDetallesInv(id){
		var pa = JSON.stringify({
		  servicio: "getId",
		  id: id
		});
		return this.http.post<any>(this.url, pa, environment.cabecera());
	}

	borrar(id){
		let pa = JSON.stringify({
			servicio: "borrar",
			id: id
		});
		return this.http.post<any>(this.url, pa, environment.cabecera());
	}
}
