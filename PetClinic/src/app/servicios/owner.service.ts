import { Injectable } from '@angular/core';
import { Owners } from "../models/owners";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost/AJAX/petClinic/API/petclinic/servicios.php";

  getOwners(){
    var pa = JSON.stringify({
      accion: "ListarOwners"
    });

    return this.http.post<Owners[]>(this.url, pa);
    
  }

  getDetallesOwners(id){
    var pa = JSON.stringify({
      accion: "ObtenerOwnerId",
      id: id
    });

    return this.http.post<any>(this.url, pa);
    
  }

  getDetallesPets(id){
    var pa = JSON.stringify({
      accion: "ObtenerOwnerId_Pets",
      id: id
    });

    return this.http.post<any>(this.url, pa);
    
  }

  borraOwner(id){
    var pa = JSON.stringify({
      accion: "BorraOwner",
      id: id,
      listado: "OK"
    });

    return this.http.post<any>(this.url, pa);
  }

  anadeOwner(owner){
    var pa = JSON.stringify({
      accion: "AnadeOwner",
      owner: owner
    });

    return this.http.post<any>(this.url, pa);
  }

  modOwner(owner, id){
    var pa = JSON.stringify({
      accion: "ModificaOwner",
      owner: owner,
      id: id
    });

    return this.http.post<any>(this.url, pa);
  }

}
