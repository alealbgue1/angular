import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {

  private url:string ="http://localhost/AJAX/examen/servidor.php";

  constructor(private http: HttpClient) { }

  listar(){
    var p = {
      servicio: "facturas"
    };

    return this.http.post(this.url, JSON.stringify(p));
  }

  detalle(id:number){
    var p = {
      servicio: "detalle",
      id: id
    };

    return this.http.post(this.url, JSON.stringify(p));
  }

  anade(factura: Object){
    var p = {
      servicio: "anade",
      detalle: factura
    };

    return this.http.post(this.url, JSON.stringify(p));
  }

  borrar(id, id_factura){
    var p = {
      servicio: "borra",
      id: id,
      id_factura: id_factura
    }
    return this.http.post(this.url, JSON.stringify(p));
  }

  modifica(factura: Object){
    var p = {
      servicio: "modifica",
      detalle: factura
    };

    return this.http.post(this.url, JSON.stringify(p));
  }
}
