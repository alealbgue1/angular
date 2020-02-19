import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitService } from 'src/app/servicios/visit.service';
import { Pet } from 'src/app/models/pet';
import { Visits } from 'src/app/models/visits';

@Component({
  selector: 'app-form-visit',
  templateUrl: './form-visit.component.html',
  styleUrls: ['./form-visit.component.css']
})
export class FormVisitComponent implements OnInit {

  private pet: Pet;
  private vacio: boolean;
  private idPetGlobal: number;

  private visita: Visits;

  constructor(private servicioVisit: VisitService ,private route: ActivatedRoute, private ruta: Router) {
    this.visita = <Visits>{};
    this.vacio = false;
   }

  ngOnInit() {

    const idPet = this.route.snapshot.params["idPet"];
    this.idPetGlobal = idPet;

    this.servicioVisit.getDetallesPets(idPet).subscribe(datos =>{
      console.log("Detalles pet", datos);
      this.pet = datos;
      this.vacio = true;
    })
  }

  anadeVisit(visit){

    this.visita.petId = this.idPetGlobal;

    console.log("Añadir visita",this.visita);

    this.servicioVisit.anadeVisit(this.visita).subscribe(datos =>{
      if(datos.result == "OK")
            alert("VISIT AÑADIDO CON ÉXITO");
    });

    this.ruta.navigate(['/detalles-owner/'+this.pet.owner.id])
  }

}
