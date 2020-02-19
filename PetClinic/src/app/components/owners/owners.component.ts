import { Component, OnInit } from '@angular/core';
import { Owners } from "../../models/owners";
import { OwnerService } from 'src/app/servicios/owner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  public arrOwners: Array<Owners>;

  constructor(private servicioOwner: OwnerService, private route: ActivatedRoute, private ruta: Router) { }

  ngOnInit() {
    this.servicioOwner.getOwners().subscribe(datos=>{
      console.log(datos);
      this.arrOwners = datos;
    });
  }

  borrar(owner){
    console.log(owner);

    if(confirm("¿Deseas eliminar "+owner.firstName+" "+owner.lastName+"?")){
      this.servicioOwner.borraOwner(owner.id).subscribe(datos=>{
        this.arrOwners=datos;
      });
    }

  }

}
