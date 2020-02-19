import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pettype } from '../models/pettype';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost/AJAX/petClinic/API/petclinic/servicios.php";

  listarPet(id){
    var pa = JSON.stringify({
      accion: "ListarPetsOwnerId",
      id: id
    });

    return this.http.post<any>(this.url, pa);
  }

  getDetallesPets(id){
    var pa = JSON.stringify({
      accion: "ObtenerPetId",
      id: id
    });

    return this.http.post<any>(this.url, pa);
    
  }

  anadePet(pet){
    var pa = JSON.stringify({
      accion: "AnadePet",
      pet: pet
    });

    return this.http.post<any>(this.url, pa);
  }

  getTypes(){
    var pa = JSON.stringify({
      accion: "ListarPettypes"
    });

    return this.http.post<Pettype[]>(this.url, pa);
  }

  borrarPet(id){
    var pa = JSON.stringify({
      accion: "BorraPet",
      id: id
    });

    return this.http.post<any>(this.url, pa);
  }

  modPet(pet){
    var pa = JSON.stringify({
      accion: "ModificaPet",
      pet: pet
    });

    return this.http.post<any>(this.url, pa);
  }
  

}
