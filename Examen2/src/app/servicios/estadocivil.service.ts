import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EstadocivilService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost/AJAX/Servicios/servicios.php";

  getEC(){
    var p = JSON.stringify({
        accion: 9
      });
  
      return this.http.post<any>(this.url, p);
  }
  
}
