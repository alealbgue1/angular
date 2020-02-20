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
  private idVisitGlobal: number;

  private textoBoton: string;

  private visita: Visits;

  constructor(private servicioVisit: VisitService, private route: ActivatedRoute, private ruta: Router) {
    this.visita = <Visits>{};
    this.vacio = false;
  }

  ngOnInit() {

    const idPet = this.route.snapshot.params["idPet"];
    this.idPetGlobal = idPet;

    const idVisit = this.route.snapshot.params["idVisit"];
    this.idVisitGlobal = idVisit;

    if (idPet) {
      this.servicioVisit.getDetallesPets(idPet).subscribe(datos => {
        console.log("Detalles pet", datos);
        this.pet = datos;
        this.vacio = true;
      })

      this.textoBoton = "Add";
    }

    if (idVisit) {
      this.servicioVisit.getDetallesVisit(idVisit).subscribe(datos => {
        console.log("Detalles visit", datos);
        this.visita = datos;
        this.pet = datos.pet;
        this.vacio = true;
        console.log("Detalles pet", this.pet);
      })

      this.textoBoton = "Edit";
    }
  }

  anadeVisit(visit) {

    if (this.idPetGlobal) {
      this.visita.petId = this.idPetGlobal;

      console.log("Añadir visita", this.visita);

      this.servicioVisit.anadeVisit(this.visita).subscribe(datos => {
        if (datos.result == "OK")
          alert("VISIT AÑADIDO CON ÉXITO");
      });

      this.ruta.navigate(['/detalles-owner/' + this.pet.owner.id])
    }

    if(this.idVisitGlobal){
      this.visita.petId = this.pet.id;

      console.log("Modificar visita", this.visita);

      this.servicioVisit.modVisit(this.visita).subscribe(datos => {
        if (datos.result == "OK")
          alert("VISIT MODIFICADO CON ÉXITO");
      });

      this.ruta.navigate(['/detalles-owner/' + this.pet.owner.id]);
    }


  }

}
