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

    return this.http.post<Owners>(this.url, pa);
    
  }

}
