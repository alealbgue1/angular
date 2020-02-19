import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from "@angular/router";
import { Owners } from 'src/app/models/owners';
import { OwnerService } from 'src/app/servicios/owner.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { PetService } from 'src/app/servicios/pet.service';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-owner-detalles',
  templateUrl: './owner-detalles.component.html',
  styleUrls: ['./owner-detalles.component.css']
})
export class OwnerDetallesComponent implements OnInit {

  private owner: Owners;


  constructor(private servicioDetalle: OwnerService,private route: ActivatedRoute, private ruta: Router) {
    this.owner = <Owners>{};
   }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];

    this.servicioDetalle.getDetallesPets(id).subscribe(datos=>{
      console.log(datos);
      this.owner = datos;
    })
  }

  borrar(owner){
    console.log(owner);

    if(confirm("¿Deseas eliminar "+owner.firstName+" "+owner.lastName+"?")){
      this.servicioDetalle.borraOwner(owner.id).subscribe(datos=>{
        this.owner=datos;
      });
    }

    this.ruta.navigate(['/owners']);

  }

  actualizaBorrar(datos){
    console.log(datos);

    if(datos.result == "OK"){
      alert("PET eliminado con éxito");
      this.servicioDetalle.getDetallesPets(this.owner.id).subscribe(datos =>{
        console.log("Borrar datos", datos);
        this.owner = datos;
      })
    }
  }

}
