import { Component, OnInit } from '@angular/core';
import { Owners } from "../../models/owners";
import { OwnerService } from 'src/app/servicios/owner.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  public arrOwners: Array<Owners>;

  constructor(private servicioOwner: OwnerService) { }

  ngOnInit() {
    this.servicioOwner.getOwners().subscribe(datos=>{
      console.log(datos);
      this.arrOwners = datos;
    });
  }

}
