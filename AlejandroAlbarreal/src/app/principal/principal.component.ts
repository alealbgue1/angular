import { Component, OnInit } from '@angular/core';
import { PAjaxService } from '../p-ajax.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public listaFacturas:any;

  constructor(private peticion: PAjaxService) {

    this.peticion.listar().subscribe(datos =>{
      console.log(datos);
      this.listaFacturas = datos;
    });
   }

  ngOnInit() {
  }

}
