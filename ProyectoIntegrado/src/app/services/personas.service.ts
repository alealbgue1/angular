import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

	private url = environment.API_URL;

	constructor(private http: HttpClient) { }
	
	listar(){
		let pa = JSON.stringify({
			servicio: "listar"
		});
		return this.http.post<any>(this.url, pa, environment.cabecera());
	}

	anadir(persona){
		//  Clonamos el objeto:
		let pa = JSON.parse(JSON.stringify(persona));
		//  Le añadimos el nuevo atributo, servicio:
		pa.servicio = "insertar";
		return this.http.post<any>(this.url, JSON.stringify(pa), environment.cabecera());
	}
}
