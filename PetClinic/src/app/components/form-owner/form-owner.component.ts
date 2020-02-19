import { Component, OnInit } from '@angular/core';
import { Owners } from 'src/app/models/owners';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from 'src/app/servicios/owner.service';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {

  private propietario:Owners;
  private id = this.route.snapshot.params["id"];
  private textoBoton:string;

  constructor(private servicioDetalle: OwnerService, private route: ActivatedRoute, private ruta: Router) { 
    this.propietario = <Owners>{};
    this.textoBoton = "";
    
  }

  ngOnInit() {
    if(this.id == -1){
      this.textoBoton = "Añadir";
    }
    else{
      this.servicioDetalle.getDetallesOwners(this.id).subscribe(datos =>{
        this.propietario = datos;
      })
      this.textoBoton = "Modificar";
    }
  }

  anadirOrMod(owner){
    console.log(this.propietario);

    if(this.id == -1){
      console.log("estoy en añadir");
      this.servicioDetalle.anadeOwner(this.propietario).subscribe(datos=>{
        if(datos.result == "OK")
          alert("OWNER CON ÉXITO");
          this.ruta.navigate(['/owners']);
      });
    }
    else{
      this.propietario.id = this.id;
      console.log("estoy en mod");
      console.log(this.propietario);
      this.servicioDetalle.modOwner(this.propietario, this.propietario.id).subscribe(datos=>{
        console.log(datos);
        this.propietario=datos;
        if(datos.result == "OK")
          alert("OWNER MODIFICADO CON ÉXITO");
          this.ruta.navigate(['/owners']);
      });
    }

    
  }

}
