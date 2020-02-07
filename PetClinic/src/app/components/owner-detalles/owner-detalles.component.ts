import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { Owners } from 'src/app/models/owners';
import { OwnerService } from 'src/app/servicios/owner.service';

@Component({
  selector: 'app-owner-detalles',
  templateUrl: './owner-detalles.component.html',
  styleUrls: ['./owner-detalles.component.css']
})
export class OwnerDetallesComponent implements OnInit {

  private owner: Owners;

  constructor(private servicioDetalle: OwnerService,private route: ActivatedRoute) {
    this.owner = <Owners>{};
   }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];

    this.servicioDetalle.getDetallesOwners(id).subscribe(datos=>{
      console.log(datos);
      this.owner = datos;
    })
  }

}
