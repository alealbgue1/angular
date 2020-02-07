import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Vet } from "../models/vet";

@Injectable({
  providedIn: 'root'
})
export class VetService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost/AJAX/petClinic/API/petclinic/servicios.php";

  getVets(){
    var pa = JSON.stringify({
      accion: "ListarVets"
    });

    return this.http.post<Vet[]>(this.url, pa);
    
  }
}
