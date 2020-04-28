import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InvestigadorService {

  private url = environment.API_URL;

  constructor(private http: HttpClient) { }

  	listarInv(){
		let pa = JSON.stringify({
			servicio: "ListarInv"
		});
		return this.http.post<any>(this.url, pa, environment.cabecera());
	}

	obtenerInvId(id){
		let pa = JSON.stringify({
			servicio: "ObtenerInvId",
			id:id
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
		var pa = JSON.stringify({
			servicio: "ModificaInv",
			inv: inv
		  });
		  return this.http.post<any>(this.url, pa, environment.cabecera());
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
			servicio: "BorraInv",
			id: id
		});
		return this.http.post<any>(this.url, pa, environment.cabecera());
	}
}
