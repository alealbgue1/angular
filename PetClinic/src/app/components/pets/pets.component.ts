import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PetService } from 'src/app/servicios/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { Owners } from 'src/app/models/owners';
import { VisitService } from 'src/app/servicios/visit.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  @Input() pet: Pet;

  @Output() eliminado = new EventEmitter();

  private idOwnerGlobal: number;

  private propietario: Owners;
  

  constructor(private servicioPets: PetService, private servicioVisit: VisitService, private route: ActivatedRoute, private ruta: Router ) {
   }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];

    this.idOwnerGlobal = id;

    /*this.servicioPets.listarPet(id).subscribe(datos=>{
      console.log(datos);
      this.pet = datos;
    })*/
  }


  borrarPet(id){
    if(confirm('Deseas borrar la mascota '+this.pet.name+'?')){
      this.servicioPets.borrarPet(id).subscribe(datos =>{
        console.log(datos);
        this.eliminado.emit(datos);
      });
    }
  }

  actualizaBorrar(datos){

    if(datos.result == "OK"){
      alert("VISIT eliminada con éxito");
      this.servicioPets.listarVisitPet(this.pet.id).subscribe(datos =>{
        console.log("Borrar datos", datos);
        this.pet.visits = datos;
        console.log("Detalles pet", this.pet);
      })
    }
  }



}
