import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/servicios/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Pet } from 'src/app/models/pet';
import { Owners } from 'src/app/models/owners';
import { OwnerService } from 'src/app/servicios/owner.service';
import { Pettype } from 'src/app/models/pettype';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-form-pet',
  templateUrl: './form-pet.component.html',
  styleUrls: ['./form-pet.component.css']
})
export class FormPetComponent implements OnInit {

  private mascota: Pet;
  private propietario: Owners;

  private idOwnerGlobal: number;
  private idPetGlobal: number;

  private mascotaType: Pettype[];

  private textoBoton: String;

  constructor(private servicioPet: PetService, private servicioOwner: OwnerService, private route: ActivatedRoute, private ruta: Router) {
    this.mascota = <Pet>{};
    this.propietario = <Owners>{};
   }

  ngOnInit() {
    const idOwner = this.route.snapshot.params["idOwner"];
    console.log("Id de Owner", idOwner);
    this.idOwnerGlobal = idOwner;

    const idPet = this.route.snapshot.params["idPet"];
    console.log("Id de Pet", idPet);
    this.idPetGlobal = idPet;

    this.servicioPet.getTypes().subscribe(datos =>{
      //console.log(datos);
      this.mascotaType = datos;
    });

    if(idOwner){
      this.servicioOwner.getDetallesOwners(idOwner).subscribe(datos =>{
        //console.log(datos);
        this.propietario = datos;
      });
      this.textoBoton = "Add";
    }

    if(idPet){
      this.servicioPet.getDetallesPets(idPet).subscribe(datos =>{
        console.log(datos);
        this.mascota = datos;
        this.propietario = this.mascota.owner;
      })
      this.textoBoton = "Edit";
    }

  }

  anadePet(pet){
    this.mascota.owner = this.propietario;
    this.mascota.type = pet.type;

    //console.log(this.mascota)
    if(this.idOwnerGlobal){
      this.servicioPet.anadePet(this.mascota).subscribe(datos =>{
        if(datos.result == "OK")
            alert("PET AÑADIDO CON ÉXITO");
      });

      this.textoBoton = "Add";
    }

    if(this.idPetGlobal){
      this.servicioPet.modPet(this.mascota).subscribe(datos =>{
        if(datos.result == "OK")
            alert("PET Modificado CON ÉXITO");
      });

      this.textoBoton = "Edit";
    }
    

    this.ruta.navigate(['/detalles-owner/'+this.propietario.id]);
  }

  

}
