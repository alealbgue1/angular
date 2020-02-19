import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost/AJAX/petClinic/API/petclinic/servicios.php";

  getDetallesPets(id){
    var pa = JSON.stringify({
      accion: "ObtenerPetId",
      id: id
    });

    return this.http.post<any>(this.url, pa);
  }

  anadeVisit(visit){
    var pa = JSON.stringify({
      accion: "AnadeVisit",
      visit: visit
    });

    return this.http.post<any>(this.url, pa);
  }
}
