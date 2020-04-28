import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { Tipos } from '../models/tipos';

@Injectable({
  providedIn: 'root'
})
export class SucesosService {

  private url = environment.API_URL;

  private url2 = environment.API_URL2;

	constructor(private http: HttpClient) { }
	
	listarFenomenos(){
		var pa = JSON.stringify({
			servicio: "ListarFenomenos"
		});
		return this.http.post<any>(this.url2, pa);
	}

	getFenomenosId(id){
		var pa = JSON.stringify({
			servicio: "ObtenerFenomenoIdInv",
			id: id
		  });
		  return this.http.post<any>(this.url, pa, environment.cabecera());
	}

	getFenomenosIdInv(id){
		var pa = JSON.stringify({
			servicio: "ListarFenomenosInvId",
			id: id
		  });
		  return this.http.post<any>(this.url, pa, environment.cabecera());
	}

	getTypes(){
		let pa = JSON.stringify({
			servicio: "ListarFenomenotypes"
		});
		return this.http.post<Tipos[]>(this.url, pa, environment.cabecera());
	}

	getTypesId(id){
		let pa = JSON.stringify({
			servicio: "ObtenerTypeId",
			id: id
		});
		return this.http.post<any>(this.url, pa, environment.cabecera());
	}

	anadeFenomenos(fenomenos){
		let pa = JSON.stringify({
			servicio: "AnadeFenomenos",
			fenomenos: fenomenos
		});
		return this.http.post<any>(this.url, pa, environment.cabecera());
	}

	modificaFenomenos(fenomenos){
		let pa = JSON.stringify({
			servicio: "ModificaFenomeno",
			fenomenos: fenomenos
		});
		return this.http.post<any>(this.url, pa, environment.cabecera());
	}

	borraFenomenos(id){
		let pa = JSON.stringify({
			servicio: "BorraFenomeno",
			id: id
		});
		return this.http.post<any>(this.url, pa, environment.cabecera());
	}






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
		return this.http.post<any>(this.url2, pa);
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
